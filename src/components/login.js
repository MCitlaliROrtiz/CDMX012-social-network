/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { logIn } from '../lib/firebaseFunction.js';

export const login = () => {
  const home = document.createElement('section');
  home.className = 'home';
  const brand = document.createElement('section');
  brand.className = 'brand';
  const logo = document.createElement('img');
  logo.src = './img/melomaniacs.jpg';
  brand.appendChild(logo);
  const title = document.createElement('h1');
  title.className = 'title';
  title.textContent = 'MeloManiacs';
  brand.appendChild(title);
  const slogan = document.createElement('h2');
  slogan.textContent = 'What are listening to?';
  brand.appendChild(slogan);
  home.appendChild(brand);
  const buttonBox = document.createElement('section');
  buttonBox.className = 'buttonBox';
  const loginWhitGoogle = document.createElement('button');
  loginWhitGoogle.className = 'loginWhitGoogle';
  const googleIcon = document.createElement('img');
  googleIcon.setAttribute('src', './img/google_icon.png');
  loginWhitGoogle.textContent = 'Login with google';
  loginWhitGoogle.addEventListener('click', () => {
    logIn();
  });
  buttonBox.append(googleIcon, loginWhitGoogle);
  home.appendChild(buttonBox);
  return home;
};
