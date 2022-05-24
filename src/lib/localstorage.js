export const dataCollection = (variable, email) => {
  const msg = {
    texto: variable,
    correo: email,
  };
  const currentData = localStorage.getItem('content');
  const collection = [currentData, JSON.stringify(msg)];
  localStorage.setItem('content', collection);
};
