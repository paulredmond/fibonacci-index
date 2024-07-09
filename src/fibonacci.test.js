import { fromIndex } from "./fibonacci";


describe('Fibonacci', () => {
    it.each([
        { index: 0, number: 0 },
        { index: 1, number: 1 },
        { index: 2, number: 1 },
        { index: 3, number: 2 },
        { index: 4, number: 3 },
        { index: 5, number: 5 },
        { index: 6, number: 8 },
        { index: 7, number: 13 },
        { index: 8, number: 21 },
        { index: 9, number: 34 },
        { index: 10, number: 55 },
        { index: 11, number: 89 },
        { index: 12, number: 144 },
        { index: 18, number: 2584 },
        { index: 19, number: 4181 },
    ])(
        'can return a Fibonacci number for the corresponding index',
        ({ index, number }) => {
            expect(fromIndex(index)).toEqual(number);
        }
    );

    it('throws an error when given an invalid index', () => {
        expect(() => fromIndex(-5)).toThrow('-5 is an invalid index');
    })
})
