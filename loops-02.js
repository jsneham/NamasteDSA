function SearchElements(arr, num){

    for(let i=0; i<arr.length; i++){
        if(arr[i]==num){
            return i;
        }
    }

    return -1;

}

let arr= [4,2,0,7,30,6,5];
const result = SearchElements(arr, 6);
console.log("Result", result);


// returns how many negative number present in your array

function countNegativeNumbers(arr){
    let negativeCount=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]<0){
            negativeCount++;
        }
    }

    return negativeCount;

}

let arr1= [4,2,0,7,30,6,5,-8,-7,33,-89];
const res = countNegativeNumbers(arr1);
console.log("Result", res);

// find largest
function findLargest(arr){
    let largestNumber=-1; //put -Ifinity // arr[0]
    for(let i=0; i<arr.length; i++){
        if(arr[i] > largestNumber ){
            largestNumber = arr[i];
        }
    }

    return largestNumber;

}

let arr2= [4,2,0,7,30,6,5,-8,-7,33,-89];
const largestNumber = findLargest(arr2);
console.log("Result", largestNumber);

// find smalllest
function findSmallNumber(arr){
    let smalllestNumber=-1;
    for(let i=0; i<arr.length; i++){
        if(arr[i] < smalllestNumber ){
            smalllestNumber = arr[i];
        }
    }

    return smalllestNumber;

}

let arr3= [4,2,0,7,30,6,5,-8,-7,33,-89];
const smalllestNumber = findSmallNumber(arr3);
console.log("Result", smalllestNumber);
