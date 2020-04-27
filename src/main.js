/* eslint-disable no-plusplus */

function findBy(arr, element) {
  const finded = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === element) {
      finded.push(arr[i]);
    }
  }
  return finded;
}


export default findBy;
