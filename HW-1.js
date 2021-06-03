// sum Of Diagonals
let arr = [
            [1, 2, 3], 
            [4, 5, 6], 
            [7, 8, 9]
          ];

let diagonal1 = arr[0][0] + arr[1][1] + arr[2][2];
let diagonal2 = arr[0][2] + arr[1][1] + arr[2][0];

let sumOfDiagonal = diagonal1 + diagonal2;
console.log(sumOfDiagonal);
