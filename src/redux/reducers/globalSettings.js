const initialState = {
  statusLogin: false,
};
export const GlobalSettingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, statusLogin: true };
    case "LOGOUT":
      return { ...state, statusLogin: false };
    default:
      return state;
  }
};
