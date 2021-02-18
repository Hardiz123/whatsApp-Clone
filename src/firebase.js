import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCHqH6KEhbIGuiieVpb36BW2b66E-ulTCg",
  authDomain: "whatsapp-clone-27151.firebaseapp.com",
  projectId: "whatsapp-clone-27151",
  storageBucket: "whatsapp-clone-27151.appspot.com",
  messagingSenderId: "928607095750",
  appId: "1:928607095750:web:ce4ea051223ec77bb800c7",
  measurementId: "G-BRDZK04R03"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;