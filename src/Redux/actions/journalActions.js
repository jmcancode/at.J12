export const createJournal = (journal) => {
  return (dispatch, getState, { getFireStore }) => {
    const firestore = getFireStore();
    const journalId = getState().firebase.auth.uid;
    firestore
      .collection('users')
      .doc('uid')
      .add({
        ...journal,
        journalId: journalId,
        createdOn: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_JOURNAL_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_JOURNAL_ERROR" }, err);
      });
  };
};
