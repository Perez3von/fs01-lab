import fetch from 'node-fetch'; 

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

export const fetchQuotes = async () => {
  const url = ' http://futuramaapi.herokuapp.com/api/quotes';
  const req = await fetch(url);
  const res = await req.json();
//console.log( { name:res[0].character, text:res[0].quote, image:res[0].image });
  return { name:res[0].character, text:res[0].quote, image:res[0].image };

};
