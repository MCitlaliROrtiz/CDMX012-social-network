export const postGenerator = (arr) => {
  const postFirstContainer = document.createElement('section');
  postFirstContainer.className = 'postContainer';

  arr.forEach((post) => {
    while (postFirstContainer.firstChild) {
      postFirstContainer.removeChild(postFirstContainer.firstChild);
    }
    const postContainer = document.createElement('section');
    postContainer.className = 'postContainer';
    const uEmail = document.createElement('p');
    uEmail.textContent = post.userEmail;
    const text = document.createElement('p');
    text.textContent = post.postContent;
    postContainer.append(uEmail);
    postContainer.append(text);
    const deleteButton = document.createElement('button');
    deleteButton.className = 'deleteButton';
    deleteButton.textContent = 'delete';
    deleteButton.addEventListener('click', () => {
      console.log('hola!!');
    });
    postContainer.append(deleteButton);
    postFirstContainer.append(postContainer);
  });
  return postFirstContainer;
};
