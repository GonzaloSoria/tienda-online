import firebase from 'firebase/app';
import '@firebase/firestore';

// Your web app's Firebase configuration
const app = firebase.initializeApp = {
    apiKey: "AIzaSyBcRsQW1rJMGFnNTkEJCKKwuiAMxmKPynM",
    authDomain: "niketiendaonline.firebaseapp.com",
    projectId: "niketiendaonline",
    storageBucket: "niketiendaonline.appspot.com",
    messagingSenderId: "942354139485",
    appId: "1:942354139485:web:708c165b98a07e802100b4"
};
  
export const getFirebase = () => {
    return app;
}

export const getFirestore = () => {
    return firebase.firestore(app);
}