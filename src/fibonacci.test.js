import {fromIndex, isFibonacci} from "./fibonacci";


describe('Fibonacci', () => {
    describe('fromIndex', () => {
        it.each([
            {index: 0, number: 0},
            {index: 1, number: 1},
            {index: 2, number: 1},
            {index: 3, number: 2},
            {index: 4, number: 3},
            {index: 5, number: 5},
            {index: 6, number: 8},
            {index: 7, number: 13},
            {index: 8, number: 21},
            {index: 9, number: 34},
            {index: 10, number: 55},
            {index: 11, number: 89},
            {index: 12, number: 144},
            {index: 18, number: 2584},
            {index: 19, number: 4181},
        ])(
            'can return a Fibonacci number for the corresponding index',
            ({index, number}) => {
                expect(fromIndex(index)).toEqual(number);
            }
        );

        it('throws an error when given an invalid index', () => {
            expect(() => fromIndex(-5)).toThrow('-5 is an invalid index');
            expect(() => fromIndex(-1)).toThrow('-1 is an invalid index');
        })
    })

    describe('isFibonacci', () => {
        it.each([
            {number: -5, expected: false},
            {number: -1, expected: false},
            {number: 0, expected: true},
            {number: 1, expected: true},
            {number: 3, expected: true},
            {number: 143, expected: false},
            {number: 144, expected: true},
            {number: 2584, expected: true},
            {number: 4181, expected: true},
        ])(
            'determines if the number is a Fibonacci number',
            ({number, expected}) => {
                expect(isFibonacci(number)).toEqual(expected);
            }
        );
    })
})
