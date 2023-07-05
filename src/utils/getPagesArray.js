export const getPagesArray = (pagesQuantity) => {
  const array = [];
  for (let i = 0; i < pagesQuantity; i++) {
    array.push(i);
  }
  return array;
};
