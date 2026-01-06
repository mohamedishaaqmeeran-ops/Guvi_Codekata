// Problem 5 Codekata. Palindrome
let str = "malayalam";

let rev = str.split("").reverse().join("");
console.log(rev);
if (str===rev){
    console.log("It is a Palindrome")
}

else{
    console.log("It is not a Palindrome")
}