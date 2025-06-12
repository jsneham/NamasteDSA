function secondLargest(arr) {
    if(arr.length<2) return null

    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for(let i=0; i<arr.length; i++){
        if(arr[i] > firstLargest ){
            secondLargest= firstLargest;
            firstLargest = arr[i];
        }
        else if(arr[i]>secondLargest){
            secondLargest=arr[i];
        }
    }


    return secondLargest;

}


let arr= [4,9,8,12,56,0,1]
const result = secondLargest(arr)
console.log(result);
