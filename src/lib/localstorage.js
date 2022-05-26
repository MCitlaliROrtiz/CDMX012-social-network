export const dataCollection = (variable, email) => {
  const msg = {
    texto: variable,
    correo: email,
  };
  

  const currentData = localStorage.getItem('content');
  console.log(currentData);
  if (currentData === null || currentData === undefined) {
    const collection = JSON.stringify(msg);
    localStorage.setItem('content', collection);
    console.log(localStorage.getItem('content'));
    /*const str = [localStorage.getItem('content')];
    const parsear = JSON.parse(str);
    console.log(parsear);
    console.log(str); */
  }
  else{
  const collection = [currentData, JSON.stringify(msg)];

  localStorage.setItem('content', collection);
  console.log(localStorage.getItem('content'));
  /*const str = [localStorage.getItem('content')];
  const parsear = JSON.parse(str);}
  console.log(parsear)
  console.log(str);*/ }

};

/* const postGenerator = obj.forEach(() => {
  const post = document.createElement('section');
  const postCreator = document.createElement('h2');
  postCreator.textContent = obj.email;
const postBody = document.createElement('p');
 postBody.textContent = obj.tex
});
*/
