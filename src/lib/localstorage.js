import { postGenerator } from './index.js';

export const dataCollection = (variable, email) => {
  const msg = {
    postContent: variable,
    userEmail: email,
  };

  const currentData = localStorage.getItem('content');
  const postBox = document.createElement('section');
  postBox.className = 'postBox';
  if (currentData === null || currentData === undefined) {
    const collection = JSON.stringify([msg]);
    localStorage.setItem('content', collection);
    const currentCollection = JSON.parse(localStorage.getItem('content', collection));
    postBox.append(postGenerator(currentCollection));
  } else if (currentData !== null || currentData !== undefined) {
    const newCurrentData = JSON.parse(currentData);
    newCurrentData.push(msg);
    localStorage.setItem('content', JSON.stringify(newCurrentData));
    const newCollection = JSON.parse(localStorage.getItem('content'));
    postBox.append(postGenerator(newCollection));
  }
  return postBox;
};
