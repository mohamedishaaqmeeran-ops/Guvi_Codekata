//Prime
const arr = [1, 2, 3, 4, 5, 19, 20];

for (let j = 0; j < arr.length; j++) {
    let n = arr[j];
    let flag = 1;
    if (n === 1) {
        console.log("Neither prime nor composite ")
    }
    else if (n > 1) {
        for (let i = 2; i <= n / 2; i++) {
            if (n % i == 0) {
                flag = 0;
                break;
            }
        }
        if (flag == 1) {
            console.log("Prime number")
        }
        else {
            console.log("Not a Prime number")
        }
    }
    else {
        console.log("Not a Prime number")
    }
}
