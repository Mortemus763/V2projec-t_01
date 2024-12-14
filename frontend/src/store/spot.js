import { csrfFetch } from './csrf';

// Action Types
const CREATE_SPOT = 'spots/createSpot';
const GET_SPOT_DETAILS = 'spots/getSpotDetails';
const CLEAR_ERRORS = 'spots/clearErrors';
const UPDATE_SPOT = 'spots/updateSpot';

// Action Creators
export const createSpotAction = (spot) => ({
  type: CREATE_SPOT,
  spot,
});

export const getSpotDetailsAction = (spot) => ({
  type: GET_SPOT_DETAILS,
  spot,
});

export const clearErrorsAction = () => ({
  type: CLEAR_ERRORS,
});

const updateSpotAction = (spot) => ({
  type: UPDATE_SPOT,
  payload: spot,
});

// Thunks
export const createSpot = (spotData) => async (dispatch) => {
  try {
    const res = await csrfFetch('/api/spots', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(spotData),
    });

    if (res.ok) {
      const newSpot = await res.json();
      dispatch(createSpotAction(newSpot));
      return newSpot;
    }
  } catch (err) {
    const errors = await err.json();
    throw errors; // This will allow the form to catch and display the validation errors.
  }
};

export const getSpotDetails = (spotId) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/${spotId}`);
  if (res.ok) {
    const spot = await res.json();
    dispatch(getSpotDetailsAction(spot));
  }
};

export const updateSpot = (spotId, updatedSpot, imageUrls) => async (dispatch) => {
  try {
    // Update spot details in the database
    const response = await fetch(`/api/spots/${spotId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...updatedSpot, images: imageUrls }),
    });

    if (response.ok) {
      const updatedSpotData = await response.json();
      dispatch(updateSpotAction(updatedSpotData)); // Dispatch the updated spot
      return updatedSpotData;
    } else {
      const errorData = await response.json();
      return Promise.reject(errorData.errors || 'Failed to update spot');
    }
  } catch (error) {
    console.error('Error updating spot:', error);
    throw error;
  }
};

// Initial State
const initialState = {
  spot: null,
  spots: {}, // This will hold all spots keyed by their IDs
  errors: null,
};

// Reducer
const spotReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SPOT:
      return {
        ...state,
        spot: action.spot,
        spots: { ...state.spots, [action.spot.id]: action.spot },
      };
    case GET_SPOT_DETAILS:
      return {
        ...state,
        spot: action.spot,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        errors: null,
      };
    case UPDATE_SPOT:
      return {
        ...state,
        spot: action.payload,
        spots: { ...state.spots, [action.payload.id]: action.payload },
      };
    default:
      return state;
  }
};

export default spotReducer;
