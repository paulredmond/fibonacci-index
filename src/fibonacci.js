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
