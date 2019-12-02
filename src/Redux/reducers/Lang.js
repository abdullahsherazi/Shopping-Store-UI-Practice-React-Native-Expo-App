const Lang = (state = "en", action) => {
  switch (action.type) {
    case "EN":
      state = "en";
      return state;

    case "AR":
      state = "ar";
      return state;
    default:
      return state;
  }
};

export default Lang;
