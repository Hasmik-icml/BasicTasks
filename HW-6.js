let arr = [];
function stack(myArr, action, elem){
    if (elem === 'undefined' || action === 'get'){
      if(myArr.length === 0){
        return 'empty stack';
      } else
      return myArr.pop();
    }
    if(action === 'set' && elem !== 'undefined'){
      myArr.push(elem);
      return myArr;
    }
}
  console.log(stack(arr, 'set', 15));
  console.log(stack(arr, 'set', 16));
  console.log(stack(arr, 'set', 17));
  console.log(stack(arr, 'set', 18));
  console.log(stack(arr, 'get', 24));
  console.log(stack(arr, 'get'));
  console.log(stack(arr, 'get'));
  console.log(stack(arr, 'get'));
  console.log(stack(arr, 'get'));
 