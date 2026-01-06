//Prime
let n=19;
let flag=1;
if (n===1){
    console.log("Neither prime nor composite ")
}
else if (n>1){
    for(let i=2;i<=n/2;i++){
        if (n%i==0){
            flag=0;
            break;
    }
}
if (flag==1){
    console.log("Prime number")
}
else {
    console.log("Not a Prime number")
}
}
else{
    console.log("Not a Prime number")
}
