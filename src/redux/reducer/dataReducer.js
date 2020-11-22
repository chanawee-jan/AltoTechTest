const initialState = {
  GraphData: undefined,
  Room: undefined
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addGraph":
      state = {
        ...state,
        GraphData: action.payload,
      };
      break;
    case "addRoom":
      state = {
        ...state,
        Room: action.payload,
      };
      break;
    default:
  }
  return state;
};
