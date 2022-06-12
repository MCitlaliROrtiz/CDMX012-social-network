/* eslint-disable import/order */
// eslint-disable-next-line import/no-cycle
// eslint-disable-next-line no-unused-vars
// import { onNavigate } from '../main.js';

import { dataCollection } from '../lib/localstorage.js';
import { logOut } from '../lib/firebaseFunction.js';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/order
// eslint-disable-next-line import/no-unresolved
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js';

import { postGenerator } from '../lib/localStorageFunctions.js';

const auth = getAuth();
export const post = () => {
  const muroDePrueba = document.createElement('section');
  muroDePrueba.className = 'muro';
  const head = document.createElement('header');
  head.className = 'head';
  const ornamentLogo = document.createElement('img');
  ornamentLogo.src = './img/melomaniacs.jpg';
  head.appendChild(ornamentLogo);
  const greetings = document.createElement('h3');
  greetings.textContent = 'What are listening to?';
  head.appendChild(greetings);
  muroDePrueba.append(head);
  const posting = document.createElement('section');
  posting.className = 'postContent';
  const textArea = document.createElement('textarea');
  textArea.className = 'textarea';
  textArea.setAttribute('placeholder', 'What are listening to?...');
  const postButton = document.createElement('button');
  postButton.textContent = 'Post';
  posting.append(postButton, textArea);
  const postBox = document.createElement('section');
  postBox.className = 'postBox';
  muroDePrueba.append(posting, postBox);
  postButton.addEventListener('click', () => {
    const email = auth.currentUser.email;
    const text = textArea.value;
    if (text === '') {
      // eslint-disable-next-line no-undef
      swal({
        title: 'Hello! you have to write something',
        text: 'What are you listening to?',
        icon: 'error',
        button: 'ok',
      });
    } else {
      postBox.append(dataCollection(text, email));
      textArea.value = '';
    }
  });
  const buttonReturn = document.createElement('button');
  buttonReturn.textContent = 'Log out';
  buttonReturn.addEventListener('click', () => {
    logOut();
  });
  const collection = JSON.parse(localStorage.getItem('content'));
  /* if (collection === null) {
    muroDePrueba.append(posting);
  } else */
  if (collection !== null) {
    postBox.append(postGenerator(collection));
  }

  head.append(buttonReturn);
  return muroDePrueba;
};
