const initState = {};

const plansReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PLANS_SUCCESS":
      console.log("created plan");
      return state;
    case "CREATE_PLANS_ERROR":
      console.log("create plans error");
      return state;
    default:
      return state;
  }
};

export default plansReducer;
