import firebase from "firebase/app"
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDi_1tkSII6GkoWw63E9QjM-Lgcxy1nSsQ",
    authDomain: "man-city-7c4c8.firebaseapp.com",
    projectId: "man-city-7c4c8",
    storageBucket: "man-city-7c4c8.appspot.com",
    messagingSenderId: "558121322942",
    appId: "1:558121322942:web:20ffd7cb6eec89a919d1ef",
    measurementId: "G-2QD7PJPTP1"
};

//Initialize App
firebase.initializeApp(firebaseConfig);

export { 
    firebase
}