export const dataCollection = (variable, email) => {
  const msg = {
    postContent: variable,
    userEmail: email,
  };

  const currentData = localStorage.getItem('content');

  if (currentData === null || currentData === undefined) {
    const collection = JSON.stringify([msg]);
    localStorage.setItem('content', collection);
  } else if (currentData !== null || currentData !== undefined) {
    const newCurrentData = JSON.parse(currentData);
    newCurrentData.push(msg);
    localStorage.setItem('content', JSON.stringify(newCurrentData));
    const newCollection = JSON.parse(localStorage.getItem('content'));
  }

  /*

    function createPost(post) {
  let cardContainer=document.createElement("section");
  cardContainer.className="cardContainer";

  //creacion de nodo card y sus elementos
  let card=document.createElement("section");
   card.style.backgroundColor=item.bgColor;
   //console.log(card.style);
   card.className="cardStyle"
   let image=document.createElement("img");
   image.src=item.image;
   let name=document.createElement("p");
   name.textContent=item.id;
   card.appendChild(name);
   card.appendChild(image);
   //creacion del nodo reverse y sus elementos
   let reverse=document.createElement("section");
   reverse.className="cardReverse";
   //insercion de nodos card y reverse en nodo el
   cardContainer.appendChild(card);
   cardContainer.appendChild(reverse);
    //evento a para girar tarjetas
    el.appendChild(cardContainer)
  }
*/
};
