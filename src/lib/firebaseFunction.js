import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js';

import {
  getAuth, signInWithPopup, GoogleAuthProvider, signOut,
} from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js';

import { firebaseConfig } from './firebaseKey.js';

initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();

export const logIn = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user);
    }).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    });

  console.log('hola');
};

export const logOut = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
  // eslint-disable-next-line no-alert
  alert('se esta cerrando la sesion');
};
