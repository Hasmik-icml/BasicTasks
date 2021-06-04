let arr = [4, 10, 8, 100, 15, 73, 9, 14];

function filter(arr, func){
  let newArr = [];
  for(let i = 0; i < arr.length; ++i){
     if(func(arr[i])){
        newArr.push(arr[i]);
     }
  }
  return newArr;
}

console.log(filter(arr, element => element % 5 === 0));
