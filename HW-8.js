//Գտնել զանգվածի 2-րդ մեծագույն արժեքի ինդեքսը
let arr = [2022, 500, 1239, 520, -1, 515, 1240, 2];
let max1 = arr[0];
let max2 = arr[1];

for (let i = 1; i < arr.length; ++i) {
  if(arr[i] > max1){
    max2 = max1;
    max1 = arr[i];
  } else
  if(arr[i] > max2){
    max2 = arr[i];
    index = i;
  }
}
for (let j = 0; j < arr.length; ++j){
  if (max2 === arr[j]){
    console.log(j);
  }
}
