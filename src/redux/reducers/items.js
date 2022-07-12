const initialState = { total: 1, items: [] };

export const ItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TOTAL":
      return;
    case "SET_ITEMS":
      return {
        ...state,
        total: action.payload.total,
        items: action.payload.items,
      };
    default:
      return state;
  }
};
