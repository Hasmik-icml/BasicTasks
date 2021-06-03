let arr = [44,10];
function swap(myArr){
        myArr[0] = myArr[1] + myArr[0];
        myArr[1] = myArr[0]- myArr[1];
        myArr[0] = myArr[0]- myArr[1];
    return myArr;
}
console.log(swap(arr));