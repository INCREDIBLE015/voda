export const createPage = (page) => {
    return (dispatch, getState, {getFirestore}) => {
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
      firestore.collection('pages').add({
        ...page,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'CREATE_PAGE_SUCCESS' });
      }).catch(err => {
        dispatch({ type: 'CREATE_PAGE_ERROR' }, err);
      });
    }
  };