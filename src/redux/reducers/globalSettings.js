const initialState = {
  statusLogin: false,
  activeItems: true,
  fullName: "",
  createdAt: "",
};
export const GlobalSettingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, statusLogin: true };
    case "LOGOUT":
      return { ...state, statusLogin: false };
    case "SET_PROFILE_INFO":
      return {
        ...state,
        fullName: action.payload.fullName,
        createdAt: action.payload.createdAt,
      };
    case "ACTIVE_ITEMS":
      return { ...state, activeItems: true };
    case "DEACTIVATE_ITEMS":
      return { ...state, activeItems: false };
    default:
      return state;
  }
};
