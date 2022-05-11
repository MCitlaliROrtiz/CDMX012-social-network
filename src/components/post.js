import { onNavigate } from '../main.js';

import { salir } from '../lib/firebaseFunction.js';

export const post = () => {
  const muroDePrueba = document.createElement('section');
  const head = document.createElement('header');
  head.className = 'head';
  const ornamentLogo = document.createElement('img');
  ornamentLogo.src = './img/melomaniacs.jpg';
  head.appendChild(ornamentLogo);
  const greetings = document.createElement('h3');
  greetings.textContent = 'What are listening to?';
  head.appendChild(greetings);
  muroDePrueba.append(head);
  const posting = document.createElement('input');
  const buttonReturn = document.createElement('button');
  buttonReturn.textContent = 'Close';
  buttonReturn.addEventListener('click', () => {
    salir();
  });
  muroDePrueba.append(buttonReturn);
  muroDePrueba.append(posting);
  return muroDePrueba;
};
