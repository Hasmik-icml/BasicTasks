// տպել 1-100 միջակայքում եղած ֆիբոնաչիի թվերը
 let arr = [];
 arr[0] = 0;
 arr[1] = 1;
 for (let i = 2; i < 100; ++i){
    if (arr[i-1] + arr[i-2] > 100){
      break;
    }
   arr[i] = arr[i-1] + arr[i-2];
 
 }
 console.log(arr);