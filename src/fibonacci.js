/**
 * Return a Fibonacci number for a given index.
 *
 * @param {number} index
 * @return {number}
 */
export function fromIndex(index) {
    let n1 = 0;
    let n2 = 1;
    let running_index = 2;
    let number;

    if (index < 0) {
        throw new Error(`${index} is an invalid index`);
    }

    if (index === 0) {
        return 0;
    }

    if (index === 1) {
        return 1;
    }

    while (running_index <= index) {
        number = n1 + n2;
        n1 = n2;
        n2 = number;
        running_index++;
    }

    return number;
}

/**
 * Determine if a given number is a Fibonacci number.
 *
 * @param {number} number
 * @return {boolean}
 */
export function isFibonacci(number) {
    if (number < 0) {
        return false;
    }

    let case1 = 5 * number * number + 4;
    let case2 = 5 * number * number - 4;

    return isPerfectSquare(case1) || isPerfectSquare(case2);
}

function isPerfectSquare(number) {
    let x = Math.sqrt(number);

    return x === Math.floor(x);
}
