for (let i = 0; i < 5; i++) {
    console.log('Hello',  i+1);
}

for (let i = 0; i <=4; i++) {
    console.log("HW1");
}

for (let i = 5; i  >0; i--) {
    console.log("HW2");
}

//Function inside loop

function greet(i){
    console.log("Namaste" + i);
}

for (let i = 0; i < 5; i++) {
    greet(i)  
}


// aaray
let arr = [10, 3, 5, 2, 7, 6, 9];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

let num=5;
while(num<15){
    console.log("HW");
    num++
    
}