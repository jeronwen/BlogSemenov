const initialState = { total: 1, idPost: "", items: [] };

export const ItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ITEMS":
      return {
        ...state,
        total: action.payload.total,
        items: action.payload.items,
      };
    case "GET_ID_POST":
      return { ...state, idPost: action.payload };
    default:
      return state;
  }
};
