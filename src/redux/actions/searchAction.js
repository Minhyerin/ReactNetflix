const search = (keyword) => {
  return (dispatch) => {
    console.log("keyword?", keyword);
    dispatch({ type: "GET_RESULT", payload: { keyword } });
  };
};

export const searchAction = { search };
