/* eslint-disable no-undef */
export const postGenerator = (arr) => {
  const postFirstContainer = document.createElement('section');
  postFirstContainer.className = 'postContainer';
  console.log(arr);
  arr.forEach((post) => {
    while (postFirstContainer.firstChild) {
      postFirstContainer.removeChild(postFirstContainer.firstChild);
    }
    console.log(post);
    const postContainer = document.createElement('section');
    postContainer.className = 'postContainer';
    const uEmail = document.createElement('p');
    uEmail.textContent = post.userEmail;
    const text = document.createElement('p');
    text.textContent = post.postContent;
    postContainer.append(uEmail);
    postContainer.append(text);
    const imgDelete = document.createElement('img');
    imgDelete.setAttribute('src', './img/delete.png');
    imgDelete.className = 'delete';
    imgDelete.addEventListener('click', () => {
      swal({
        title: 'Sorry!',
        text: 'your message was deleted',
        icon: 'error',
        button: 'ok',
      });
      postFirstContainer.removeChild(postContainer);
    });
    postContainer.append(imgDelete);
    postFirstContainer.append(postContainer);
  });
  return postFirstContainer;
};
