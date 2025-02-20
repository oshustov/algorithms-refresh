function isHappyNumber(n) {
    let slow = n;
    let fast = n;

    do {
        slow = next(slow);
        fast = next(next(fast));
    }
    while (slow !== fast);

    return fast == 1;
}

function next(n) {
    let next = 0;
    while (n > 0) {
        let digit = n % 10;
        next += digit * digit;
        n = Math.floor(n / 10);
    }

    return next;
}

export { isHappyNumber }