// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBhqTqrh7VmJwVBuhUzw59TkYHtwM8HxVQ",
  authDomain: "whatsapp-clone-121b4.firebaseapp.com",
  projectId: "whatsapp-clone-121b4",
  storageBucket: "whatsapp-clone-121b4.appspot.com",
  messagingSenderId: "92264714441",
  appId: "1:92264714441:web:a41d211c556c874f057d18",
  measurementId: "G-FKMF394C57",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
