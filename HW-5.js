function binarySearch(sortedArr, elem){
  let left = 0;
  let right = sortedArr.length-1;
  
  for (;;){
      let mid = Math.floor(left +(right - left) / 2);
      if (left >= right ) return false;
      if (sortedArr[mid] === elem) {
          return true;
      } else if (sortedArr[mid] > elem){
          right = mid - 1;
      } else if (sortedArr[mid] < elem){
          left = mid + 1;
      }
  }
}
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14], -11));

///2րդ տարբերակ
function binarySearch(sortedArr, elem){
    let mid = Math.floor(sortedArr.length/2);
   
    if (sortedArr.length === 1 && sortedArr[0] !== elem){
        return false;
    }

    if (elem === sortedArr[mid]){
        return true;
    } else if (elem > sortedArr[mid]){
        return binarySearch(sortedArr.slice(mid, sortedArr.length), elem);
    } else if (elem < sortedArr[mid]){
        return binarySearch(sortedArr.slice(0, mid), elem);
    }
}
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14], -15));