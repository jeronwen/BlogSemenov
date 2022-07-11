export const fetchComments = (id) => async (dispatch) => {
  const resp = await fetch(
    `https://blog-api-semenov.herokuapp.com/comments/post/${id}`
  );
  if (resp.ok) {
    const data = await resp.json();
    dispatch({
      type: "SET_COMMENTS",
      payload: data,
    });
  }
};
