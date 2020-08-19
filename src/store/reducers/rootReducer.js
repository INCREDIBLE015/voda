import authReducer from './authReducer'
import pageReducer from './pageReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  page: pageReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer