const initialState = [""];

export const CommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_COMMENTS":
      return action.payload;
    case "CREATE_COMMENT":
      return action.payload;
    default:
      return state;
  }
};
