import { onNavigate } from '../main.js';

import { salir } from '../lib/firebaseFunction.js';

export const post = () => {
  const muroDePrueba = document.createElement('section');
  muroDePrueba.className ='muro';
  const head = document.createElement('header');
  head.className = 'head';
  const ornamentLogo = document.createElement('img');
  ornamentLogo.src = './img/melomaniacs.jpg';
  head.appendChild(ornamentLogo);
  const greetings = document.createElement('h3');
  greetings.textContent = 'What are listening to?';
  head.appendChild(greetings);
  muroDePrueba.append(head);
  const textArea = document.createElement('form');
  textArea.className = 'postContent';
  const posting = document.createElement('input');
  posting.className = 'input';
  const postButton = document.createElement('button');
  postButton.textContent = 'Post';
  textArea.append(posting, postButton);
  console.log(post.value);
  const buttonReturn = document.createElement('button');
  buttonReturn.textContent = 'Log out';
  buttonReturn.addEventListener('click', () => {
    salir();
  });
  head.append(buttonReturn);
  muroDePrueba.append(textArea);
  return muroDePrueba;
};
