import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFNjEoxNEKICg7Ewk0kWnda1zDENJDtPE",
  authDomain: "netflick-clone.firebaseapp.com",
  projectId: "netflick-clone",
  storageBucket: "netflick-clone.appspot.com",
  messagingSenderId: "928375820225",
  appId: "1:928375820225:web:ae7ad148eb9ea648d22940",
  measurementId: "G-24T34YDB2R"
};

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebaseapp.auth();

  export { auth };
  export default db;