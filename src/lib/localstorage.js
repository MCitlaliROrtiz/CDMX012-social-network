import { postGenerator, guardarEnLocalStorage } from './localStorageFunctions.js';

export const dataCollection = (variable, email) => {
  const msg = {
    postContent: variable,
    userEmail: email,
  };

  const currentData = localStorage.getItem('content');
  const postBox = document.createElement('section');
  postBox.className = 'postBox';
  if (currentData === null || currentData === undefined) {
    const collection = guardarEnLocalStorage([msg]);
    const currentCollection = JSON.parse(localStorage.getItem('content', collection));
    postBox.append(postGenerator(currentCollection));
  } else if (currentData !== null || currentData !== undefined) {
    const newCurrentData = JSON.parse(currentData);
    newCurrentData.push(msg);
    guardarEnLocalStorage(newCurrentData);
    const newCollection = JSON.parse(localStorage.getItem('content'));
    const newPost = postGenerator(newCollection);
    return newPost;
  }
  return postBox;
};
