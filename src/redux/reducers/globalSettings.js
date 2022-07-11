const initialState = {
  // fullName: "",
  // email: "",
  // createdAt: "",
  statusLogin: false,
  activeItems: true,
};
export const GlobalSettingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, statusLogin: true };
    case "LOGOUT":
      return { ...state, statusLogin: false };
    case "ACTIVE_ITEMS":
      return { ...state, activeItems: true };
    case "DEACTIVATE_ITEMS":
      return { ...state, activeItems: false };
    default:
      return state;
  }
};
