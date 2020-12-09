import { CHANGE_TEXT } from "./compActions";

const initialState = {
  toggleText: false,
};

export const compReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        toggleText: !state.toggleText,
      };

    default:
      return state;
  }
};
