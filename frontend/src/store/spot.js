import { csrfFetch } from './csrf';

// Action Types
const CREATE_SPOT = 'spots/createSpot';
const GET_SPOT_DETAILS = 'spots/getSpotDetails';
const GET_ALL_SPOTS = 'spots/getAllSpots';
const UPDATE_SPOT = 'spots/updateSpot';
const DELETE_SPOT = 'spots/deleteSpot';
const CLEAR_ERRORS = 'spots/clearErrors';

// Action Creators
export const createSpotAction = (spot) => ({
  type: CREATE_SPOT,
  payload: spot,
});

export const getSpotDetailsAction = (spot) => ({
  type: GET_SPOT_DETAILS,
  payload: spot,
});

export const getAllSpotsAction = (spots) => ({
  type: GET_ALL_SPOTS,
  payload: spots,
});

export const updateSpotAction = (spot) => ({
  type: UPDATE_SPOT,
  payload: spot,
});

export const deleteSpotAction = (spotId) => ({
  type: DELETE_SPOT,
  payload: spotId,
});

export const clearErrorsAction = () => ({
  type: CLEAR_ERRORS,
});

// Thunks
export const createSpot = (spotData) => async (dispatch) => {
  const res = await csrfFetch('/api/spots', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(spotData),
  });

  if (res.ok) {
    const spot = await res.json();
    dispatch(createSpotAction(spot));
    return spot;
  }
};

export const getSpotDetails = (spotId) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/${spotId}`);
  if (res.ok) {
    const spot = await res.json();
    dispatch(getSpotDetailsAction(spot));
  }
};

export const getAllSpots = () => async (dispatch) => {
  const res = await csrfFetch('/api/spots');
  if (res.ok) {
    const spots = await res.json();
    dispatch(getAllSpotsAction(spots));
  }
};

export const updateSpot = (spotId, updatedSpot) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/${spotId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedSpot),
  });

  if (res.ok) {
    const spot = await res.json();
    dispatch(updateSpotAction(spot));
    return spot;
  }
};

export const deleteSpot = (spotId) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/${spotId}`, {
    method: 'DELETE',
  });

  if (res.ok) {
    dispatch(deleteSpotAction(spotId));
  }
};

// Initial State
const initialState = {
  spot: null,
  spots: {},
  errors: null,
};

// Reducer
const spotReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SPOT: {
      const newSpot = action.payload;
      return {
        ...state,
        spots: { ...state.spots, [newSpot.id]: newSpot },
        spot: newSpot,
      };
    }
    case GET_SPOT_DETAILS: {
      return {
        ...state,
        spot: action.payload,
      };
    }
    case GET_ALL_SPOTS: {
      const spots = {};
      action.payload.forEach((spot) => {
        spots[spot.id] = spot;
      });
      return {
        ...state,
        spots,
      };
    }
    case UPDATE_SPOT: {
      const updatedSpot = action.payload;
      return {
        ...state,
        spots: { ...state.spots, [updatedSpot.id]: updatedSpot },
        spot: updatedSpot,
      };
    }
    case DELETE_SPOT: {
      const newSpots = { ...state.spots };
      delete newSpots[action.payload];
      return {
        ...state,
        spots: newSpots,
        spot: state.spot && state.spot.id === action.payload ? null : state.spot,
      };
    }
    case CLEAR_ERRORS: {
      return { ...state, errors: null };
    }
    default:
      return state;
  }
};

export default spotReducer;
