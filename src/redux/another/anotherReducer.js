import { DO_STUFF } from "./anotherActions";

const initialState = {
  toggleText: false,
};

export const anotherReducer = (state = initialState, action) => {
  switch (action.type) {
    case DO_STUFF:
      return {
        ...state,
        toggleText: !state.toggleText,
      };

    default:
      return state;
  }
};
