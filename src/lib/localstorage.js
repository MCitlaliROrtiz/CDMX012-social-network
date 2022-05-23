export const capturaDeDatos = (variable) => {
  const currentData = localStorage.getItem('content');
  const colection = [...currentData, variable];
  localStorage.setItem('content', colection);
};
