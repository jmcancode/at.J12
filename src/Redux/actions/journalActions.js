export const createJournal = (journal) => {
  return (dispatch, getState, { getFirebase, getFireStore }) => {
    const firestore = getFireStore();
    const authorId = getState().firebase.auth.uid;
    const profile = getState().firebase.profile;
    const email = getState().firebase.email;
    firestore
      .collection('journal')
      .doc(`journal/{journalId}`)
      .add({
        ...journal,
        content: "",
        createdOn: new Date(),
        authorId: authorId,
        userEmail: profile.email,
      })
      .then(() => {
        dispatch({ type: 'CREATE_JOURNAL_SUCCESS' });
      })
      .catch((err) => {
        dispatch({ type: 'CREATE_JOURNAL_ERROR' }, err);
      });
  };
};
