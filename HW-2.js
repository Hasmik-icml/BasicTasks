let array = [10, 20, 1, 0, 35];
function sort(arr) {
    for (let j = 0; j < arr.length-1; ++j ){
        for (let i = 0; i < arr.length-1; ++i){
            let temp;
            if(arr[i] > arr[i+1]){ 
                temp = arr[i];    
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }
    return arr;
}

let sortedArray = sort(array);
console.log(sortedArray);