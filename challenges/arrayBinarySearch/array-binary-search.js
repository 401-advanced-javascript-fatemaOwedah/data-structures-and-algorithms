'use strict';
function BinarySearch(arr, num){
    let tracker = 0;
    let result ;
    for( let i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
        result = i;
        tracker = 1;
      }
    } if (tracker === 0){
      result = -1;
    }
    return result;
  }
  module.exports = BinarySearch;