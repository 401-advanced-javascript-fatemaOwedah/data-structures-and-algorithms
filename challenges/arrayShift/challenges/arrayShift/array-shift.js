'use strict';
function insertShiftArray(arr, num) {
  let newArr = [];
  let arrMid = Math.ceil(arr.length/2);
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
  newArr.splice(arrMid, 0, num);
  return newArr;
}
module.exports = insertShiftArray;