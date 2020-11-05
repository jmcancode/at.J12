const initState = {
    plans: [
      {
        id: 1,
        content: "This is your content",
      }
    ],
  };
  const journalReducer = (state = initState, action) => {
    switch (action.type) {
      case "CREATE_JOURNAL_SUCCESS":
        console.log("created plan");
        return state;
      case "CREATE_JOURNAL_ERROR":
        console.log("create journal error");
        return state;
      default:
        return state;
    }
  };
  
  export default journalReducer;