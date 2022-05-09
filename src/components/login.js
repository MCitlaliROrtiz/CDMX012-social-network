/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { entraConGoogle } from '../lib/firebaseFunction.js';

export const login = () => {
  const home = document.createElement('section');
  home.className = 'home';
  const brand = document.createElement('section');
  const logo = document.createElement('img');
  logo.src = './img/melomaniacs.jpg';
  brand.appendChild(logo);
  const title = document.createElement('h1');
  title.textContent = 'MeloManiacs';
  brand.appendChild(title);
  const slogan = document.createElement('h2');
  slogan.textContent = 'What are listening to?';
  brand.appendChild(slogan);
  home.appendChild(brand);
  const loginWhitGoogle = document.createElement('button');
  loginWhitGoogle.textContent = 'Login with google';
  loginWhitGoogle.addEventListener('click', () => {
    //onNavigate('/post');
    entraConGoogle();
  });
  home.appendChild(loginWhitGoogle);
  return home;
};
