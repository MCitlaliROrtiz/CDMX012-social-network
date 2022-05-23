export const capturaDeDatos = (variable) => {
  console.log('si sirvo???');
  const colection = [variable];
  colection.push(variable);
  console.log(colection);
  localStorage.setItem('content', colection);
};
