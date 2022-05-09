import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js';

import { login } from './components/login.js';

import { post } from './components/post.js';

const principal = document.getElementById('Root');

const routes = {
  '/': login,
  '/post': post,
};
const component = routes[window.location.pathname];
export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (principal.firstChild) {
    principal.removeChild(principal.firstChild);
  }
  principal.appendChild(routes[pathname]());
};
window.onpopstate = () => {
  principal.appendChild(routes[window.location.pathname]());
};

principal.append(component());
onAuthStateChanged(getAuth(), (user) => {
  if (user) {
    onNavigate('/post');
  } else {
    onNavigate('/');
  }
});
