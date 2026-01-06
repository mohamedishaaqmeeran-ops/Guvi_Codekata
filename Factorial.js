// Problem 48 Codekata. Factorial
function factorial(n){
    if (n<=1){
        return n;
    }
    else{
        return n*factorial(n-1);
    }
}
const number=8;
console.log(factorial(number))