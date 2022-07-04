const initialState = [];

export const ItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ITEMS":
      return action.payload;
    default:
      return state;
  }
};
