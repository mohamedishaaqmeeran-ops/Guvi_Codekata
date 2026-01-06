function fibonacci(n, memo = {}) {
    if (n <= 1) return n;

    if (memo[n]) return memo[n];

    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}

const number = 456;
console.log(fibonacci(number));
