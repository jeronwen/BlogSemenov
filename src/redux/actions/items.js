export const setItems = () => ({
  type: "SET_ITEMS",
});

export const fetchItems = () => async (dispatch) => {
  const resp = await fetch("https://blog-api-semenov.herokuapp.com/posts");
  if (resp.ok) {
    const data = await resp.json();
    dispatch({
      type: "SET_ITEMS",
      payload: data,
    });
  }
};
export const fetchPageItems = (page) => async (dispatch) => {
  const resp = await fetch(
    `https://blog-api-semenov.herokuapp.com/posts?page=${page}`
  );
  if (resp.ok) {
    const data = await resp.json();

    dispatch({
      type: "SET_ITEMS",
      payload: data,
    });
  }
};

export const fetchFindItems = (query) => async (dispatch) => {
  const resp = await fetch(
    `https://blog-api-semenov.herokuapp.com/posts?query=${query}`
  );
  if (resp.ok) {
    const data = await resp.json();

    dispatch({
      type: "SET_ITEMS",
      payload: data,
    });
  }
};

export const fetchUsersItems = () => async (dispatch) => {
  const resp = await fetch(
    `https://blog-api-semenov.herokuapp.com/posts?userId=${"62b9b7dd1458063d97e24ee5"}&limit=20000`
  );
  if (resp.ok) {
    const data = await resp.json();
    dispatch({
      type: "SET_ITEMS",
      payload: data,
    });
  }
};
