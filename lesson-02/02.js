function factorial(n) {
    if (n === 0 || n === 1) {
        console.debug(n)
        return 1;
    } else {
        console.debug(n)
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));
