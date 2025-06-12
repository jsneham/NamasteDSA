function printHelloWord () {
    console.log('Hello World');
}
printHelloWord();

function greet (name) {
    console.log('Hello, ' + name);
}

greet('John');
greet('Deepika');

function sum (a,b) {
    let sum = a +b;
    console.log(sum);
}

sum(7,3);

function multiply (a,b) {
    let multi = a *b;
    console.log(multi);
}
multiply(7,3);

function square (a) {
    let result = a *a;
    return result;
}
const value = square(7);
console.log(value);

function isPersonEligibleToVote (age) {
    const elibilityOfAge= 18
    if(age<0) console.log("Invalid input");
    else if(age< elibilityOfAge) console.log("not eligible");
    else console.log('eligible');
}
isPersonEligibleToVote(1)
isPersonEligibleToVote(20)
isPersonEligibleToVote(18)
isPersonEligibleToVote(-2)

//check if number is even or odd
function isEvenOrOdd(num){
 let rem= num%2;
 if(rem==0){
    console.log("Even");
 }
 else console.log("Odd");
}
isEvenOrOdd(-1)

function sum(a, b) {
    let add = a + b;
    console.log(add);
  }
  
  let x = 10;
  let y = 20;
  sum(x, y);

  function square(x) {
    let result = x * x;
    return result;
  }
  
  let res = square(3);
  console.log(res);
      

