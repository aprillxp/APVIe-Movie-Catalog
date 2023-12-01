import { FETCH_CASTS_SUCCESS } from "../action/actionType";

const intialState = {
  casts: [],
};

const castReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_CASTS_SUCCESS:
      return {
        ...state,
        casts: action.payload,
      };

    default:
      return state;
  }
};

export default castReducer;
