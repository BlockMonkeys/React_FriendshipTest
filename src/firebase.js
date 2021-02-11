import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCNuTe7jOVaqajngCBix8suz0MfRYrY7GI",
    authDomain: "react-friendshiptest.firebaseapp.com",
    projectId: "react-friendshiptest",
    storageBucket: "react-friendshiptest.appspot.com",
    messagingSenderId: "921162907580",
    appId: "1:921162907580:web:eba76b4e1771b84de675b9",
    measurementId: "G-KCSLKLV31N"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };