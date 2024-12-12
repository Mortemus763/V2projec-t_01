import { csrfFetch } from './csrf';

// Action Types
const CREATE_SPOT = 'spots/createSpot';
const GET_SPOT_DETAILS = 'spots/getSpotDetails';
const CLEAR_ERRORS = 'spots/clearErrors';

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

// Initial State
const initialState = {
  spot: null,
  errors: null,
};

// Reducer
const spotReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SPOT:
      return { ...state, spot: action.spot };
    case GET_SPOT_DETAILS:
      return { ...state, spot: action.spot };
    case CLEAR_ERRORS:
      return { ...state, errors: null };
    default:
      return state;
  }
};

export default spotReducer;