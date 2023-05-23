import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAPkoENaDybBt2C8n0iApu-gnMPCjLTTjg",
    authDomain: "prop-tracker-gw-1758b.firebaseapp.com",
    projectId: "prop-tracker-gw",
    storageBucket: "prop-tracker-gw.appspot.com",
    messagingSenderId: "786587584741",
    appId: "1:786587584741:web:345f3bdd98cd38b81fac0c"
};


firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const firestore = firebase.firestore();