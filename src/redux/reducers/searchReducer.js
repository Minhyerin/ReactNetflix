let initialState = {
  keyword: "",
};

const searchReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_RESULT":
      state.keyword = payload.keyword;
      break;
  }
  return { ...state };
};

export default searchReducer;
