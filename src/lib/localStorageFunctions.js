/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/no-unresolved
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js';

const auth = getAuth();
export const guardarEnLocalStorage = (msg) => {
  const collection = JSON.stringify(msg);
  localStorage.setItem('content', collection);
};

export const postGenerator = (arr) => {
  const postFirstContainer = document.createElement('section');
  postFirstContainer.className = 'postFirstContainer';

  arr.forEach((post, ind) => {
    const generatedPost = document.createElement('section');
    generatedPost.className = 'postContainer generatedPost';
    const uEmail = document.createElement('p');
    uEmail.textContent = post.userEmail;
    const text = document.createElement('p');
    text.textContent = post.postContent;
    generatedPost.append(uEmail);
    generatedPost.append(text);
    const imgDelete = document.createElement('img');
    imgDelete.setAttribute('src', './img/delete.png');
    imgDelete.className = 'delete';
    imgDelete.addEventListener('click', () => {
      const email = auth.currentUser.email;
      if (email === post.userEmail) {
        // eslint-disable-next-line no-undef
        swal({
          title: 'Sorry!',
          text: 'your message was deleted',
          icon: 'error',
          button: 'ok',
        });
        postFirstContainer.removeChild(generatedPost);
        arr.splice(ind, 1);
        guardarEnLocalStorage(arr);
      } else {
        imgDelete.style.display = 'none';
        // eslint-disable-next-line no-undef
        swal({
          title: 'Hey!!',
          text: 'you can´t delete this post',
          icon: 'error',
          button: 'ok',
        });
      }
    });
    generatedPost.append(imgDelete);
    postFirstContainer.append(generatedPost);
  });

  return postFirstContainer;
};
