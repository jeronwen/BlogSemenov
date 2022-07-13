export const login = () => ({
  type: "LOGIN",
});

export const fetchProfileInfo = (id) => async (dispatch) => {
  const resp = await fetch(
    `https://blog-api-semenov.herokuapp.com/users/${id}`
  );
  if (resp.ok) {
    const data = await resp.json();
    dispatch({
      type: "SET_PROFILE_INFO",
      payload: { fullName: data.fullName, createdAt: data.createdAt },
    });
  }
};
export const logout = () => ({
  type: "LOGOUT",
});

export const activateItems = () => ({
  type: "ACTIVE_ITEMS",
});

export const deactivateItems = () => ({
  type: "DEACTIVATE_ITEMS",
});
