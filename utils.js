export const getName = (obj) => {

  return obj['name'];

};

export const copyAndPush = (arr, num) => {

  const newArr = arr;

  newArr.push(num);
  return newArr;
};

export const capitalizeAndFilter = (arr) => {

  let newArr = arr.map(word => word.toUpperCase());

  newArr = newArr.filter(word => word[0] !== 'F');

  return newArr;

};
