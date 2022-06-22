// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: "AIzaSyBHnXJI0cG9V0I9OfosiMu9BoaVvKDmbg8",
//   authDomain: "quorum-7bdb8.firebaseapp.com",
//   projectId: "quorum-7bdb8",
//   storageBucket: "quorum-7bdb8.appspot.com",
//   messagingSenderId: "232023780555",
//   appId: "1:232023780555:web:20dc01137eb1d56f53bf4e",
//   measurementId: "G-FNWRBDGXSC",
// };
const firebaseConfig = {
  apiKey: "AIzaSyAeYfg4hwSy450_PCEr4KMmEvxb-vvIL9M",
  authDomain: "test-quorum-613cd.firebaseapp.com",
  projectId: "test-quorum-613cd",
  storageBucket: "test-quorum-613cd.appspot.com",
  messagingSenderId: "1038682707148",
  appId: "1:1038682707148:web:da578bb8a2497fe3bd5e69",
  measurementId: "G-YD3PT4T6WC",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

// const auth = firebase.auth();
// const fbAuth = firebase.auth;

// db.settings({
//   cacheSizeBytes: firestore.CACHE_SIZE_UNLIMITED,
//   persistence: false,
//   host: "10.0.2.2:5003",
//   ssl: false,
// });
// auth.useEmulator("http://10.0.2.2:9099");

export { analytics, db, storage };
