// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

import { capturaDeDatos } from '../lib/localstorage.js';
import { salir } from '../lib/firebaseFunction.js';

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
  const textArea = document.createElement('section');
  textArea.className = 'postContent';
  const posting = document.createElement('textarea');
  posting.className = 'textarea';
  const postButton = document.createElement('button');
  postButton.textContent = 'Post';
  textArea.append(postButton, posting);
  postButton.addEventListener('click', () => {
    const text = posting.value;
    capturaDeDatos(text);
  });
  const buttonReturn = document.createElement('button');
  buttonReturn.textContent = 'Log out';
  buttonReturn.addEventListener('click', () => {
    salir();
  });
  head.append(buttonReturn);
  muroDePrueba.append(textArea);
  return muroDePrueba;
};
