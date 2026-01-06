// Problem 1743 Codekata. Fibonacci Series
function fibonacci(n){
    if (n<=1){
        return n;
    }
    else{
        return fibonacci(n-1)+fibonacci(n-2);
    }
}
const number=10;
console.log(fibonacci(number))
//eg: 0112358