// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-JQV_R0DHz52cnR5EO7fj30WUZw4F9mk",
  authDomain: "inspogram-ad078.firebaseapp.com",
  projectId: "inspogram-ad078",
  storageBucket: "inspogram-ad078.appspot.com",
  messagingSenderId: "101916823520",
  appId: "1:101916823520:web:3482755fe96d0f6613e585"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp; //specifies time a document has been created and stored in firestore database

export { projectFirestore, projectStorage, timestamp}