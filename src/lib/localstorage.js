export const dataCollection = (variable) => {
  const currentData = localStorage.getItem('content');
  const collection = [currentData, variable];
  localStorage.setItem('content', collection);
};
