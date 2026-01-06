// Problem 37 Codekata. First Occurance of Character
let a="abcdxyz"
let b="s"
var found=-1;
for (var i=0;i<a.length;i++){
    if (b===a[i]){
        found=i;
        break;
    }
}
console.log(found);