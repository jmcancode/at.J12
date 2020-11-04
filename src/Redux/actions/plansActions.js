export const createPlans = (plans) => {
  return (dispatch, getState, { getFirebase, getFireStore }) => {
    const firestore = getFireStore();
    const plans = getState().firebase.plans;
    const plansId = getState().firebase.plans.uid;
    firestore.collection('plans').add({
        ...plans,
        categorySelect: [],
        content: "This is where content lives.",
        title: 'This is your title',
        id: plansId,
        createdAt: new Date()
    }).then(() => {
        dispatch({ type: "CREATE_PLANS", plans });
    }).catch((err) => {
        dispatch({ type: 'CREATE_PLAN_ERROR', err });
    })
    
  }
};
