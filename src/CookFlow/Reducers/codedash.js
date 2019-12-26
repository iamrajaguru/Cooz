const initialState = {
  userinput: "",
  obj: [],
  allitem: [],
  search: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "USER_INPUT":
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }
};
