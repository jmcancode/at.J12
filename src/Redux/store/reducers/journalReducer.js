const initState = {
    plans: [
      {
        id: 1,
        content: "This is your content 1",
      },
      {
        id: 2,
        content: "This is your content 2",
      },
      {
        id: 3,
        content: "This is your content 3",
      },
      {
        id: 4,
        content: "This is your content 4",
      }
    ],
  };
  const journalReducer = (state = initState, action) => {
    switch (action.type) {
      case "CREATE_JOURNAL":
        console.log("created plan", action.project);
        return state;
      case "CREATE_JOURNAL_ERROR":
        console.log("create journal error", action.err);
        return state;
      default:
        return state;
    }
  };
  
  export default journalReducer;