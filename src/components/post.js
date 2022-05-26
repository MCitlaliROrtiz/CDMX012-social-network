// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

import { dataCollection } from '../lib/localstorage.js';
import { logOut } from '../lib/firebaseFunction.js';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/order
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js';

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
  postButton.addEventListener('click', () => {
    const email = auth.currentUser.email;
    const text = textArea.value;
    if (text === '') {
      swal({
        title: 'ingresa texto',
        icon: 'error',
        button: 'ok',
      });
    } else {
      dataCollection(text, email);
    }
  });
  const buttonReturn = document.createElement('button');
  buttonReturn.textContent = 'Log out';
  buttonReturn.addEventListener('click', () => {
    logOut();
  });
  head.append(buttonReturn);
  muroDePrueba.append(posting);
  return muroDePrueba;
};
