export const setItems = () => ({
  type: "SET_ITEMS",
});

export const fetchItems = () => async (dispatch) => {
  const resp = await fetch("https://blog-api-semenov.herokuapp.com/posts");
  if (resp.ok) {
    const data = await resp.json();
    dispatch({
      type: "SET_ITEMS",
      payload: data.items,
    });
  }
};

// export const fetchItem = () => async (dispatch, id) => {
//   const resp = await fetch(
//     `https://blog-api-semenov.herokuapp.com/posts/${id}`
//   );
//   if (resp.ok) {
//     const data = await resp.json();
//     dispatch({
//       type: "SET_ITEMS",
//       payload: data,
//     });
//   }
// };
