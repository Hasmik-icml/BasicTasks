//գրել ֆունկցիա, որը կկատարի queue -ի դեր
let arr = [];
function queue(myArr, action, elem){
    if (elem === 'undefined' || action === 'get'){
      if(myArr.length === 0){
        return 'empty queue';
      } else
      return myArr.shift();
    }
    if(action === 'set' && elem !== 'undefined'){
      myArr.push(elem);
      return myArr;
    }
}
  console.log(queue(arr, 'set', 15));
  console.log(queue(arr, 'set', 16));
  console.log(queue(arr, 'set', 17));
  console.log(queue(arr, 'set', 18));
  console.log(queue(arr, 'get', 24));
  console.log(queue(arr, 'get'));
  console.log(queue(arr, 'get'));
  console.log(queue(arr, 'get'));
  console.log(queue(arr, 'get'));