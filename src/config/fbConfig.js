import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBy2DSy2vhxBIPoqeAmNrStcQIkcMYoVdI",
    authDomain: "vodafone-3292e.firebaseapp.com",
    databaseURL: "https://vodafone-3292e.firebaseio.com",
    projectId: "vodafone-3292e",
    storageBucket: "vodafone-3292e.appspot.com",
    messagingSenderId: "170069330889",
    appId: "1:170069330889:web:f6f7928b290f4b32f4b618",
    measurementId: "G-B8XKTSKTFB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 