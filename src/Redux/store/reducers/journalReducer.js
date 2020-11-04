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
      case "CREATE_JOURNAL":
        console.log("created plan", action.journal);
        return state;
      case "CREATE_JOURNAL_ERROR":
        console.log("create journal error", action.err);
        return state;
      default:
        return state;
    }
  };
  
  export default journalReducer;