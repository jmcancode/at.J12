export const createJournal = ({journal}) => {
    return (dispatch, getState, { getFirebase, getFireStore }) => {
      const firestore = getFireStore();
      const journal = getState().firebase.profile;
      const journalId = getState().firebase.auth.uid;
      firestore.collection('users').doc('uid').add({
        ...journal,
          jouranlContent: "This is where content lives.",
          id: journalId,
          createdOn: new Date()
      }).then(() => {
          dispatch({ type: "CREATE_JOURNAL", payload: journal });
      }).catch((err) => {
          dispatch({ type: 'CREATE_JOURNAL_ERROR', payload: err });
      })
      
    }
  };
  