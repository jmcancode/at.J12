const initState = {
  plans: [
    {
      id: 1,
      category: "Social Justice",
      title: "Social Justice",
      content: "This is your content",
    },
    {
      id: 2,
      category: "Social Justice",
      title: "Mental Health",
      content: "This is your content",
    },
    {
      id: 3,
      category: "Social Justice",
      title: "Wellness",
      content: "This is your content",
    },
    {
      id: 4,
      category: "Social Justice",
      title: "Personal Development",
      content: "This is your content",
    },
    {
      id: 5,
      category: "Social Justice",
      title: "Gender",
      content: "This is your content",
    },
    {
      id: 6,
      category: "Social Justice",
      title: "Ethnicity",
      content: "This is your content",
    },
    {
      id: 7,
      category: "Social Justice",
      title: "Pro Sports",
      content: "This is your content",
    },
    {
      id: 8,
      category: "Social Justice",
      title: "Life Skills",
      content: "This is your content",
    },
  ],
};
const plansReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PLANS":
      console.log("created plan", action.plans);
      return state;
    case "CREATE_PLANS_ERROR":
      console.log("create plans error", action.err);
      return state;
    default:
      return state;
  }
};

export default plansReducer;
