import { getStringInfo, stringInfo, toUpper } from "../app/Utils"

describe('Ustils test suite', () => {
    it('should return upper case of a valid string', () => {
        //arrange
        const sut = toUpper;
        const expected = 'ABC';

        //act
        const actual = sut('abc');

        //assert
        expect(actual).toBe(expected);
    });

    describe('getString info for arg My-String', () => {
        test('return right length', () => {
            const actual = getStringInfo('My-string');
            expect(actual.character).toHaveLength(9);
        });
        test('return right lowecase', () => {
            const actual = getStringInfo('My-string');
            expect(actual.lowerCase).toBe('my-string');
        });
        test('return right uppercase', () => {
            const actual = getStringInfo('My-string');
            expect(actual.upperCase).toBe('MY-STRING')
        })

        it('should return string info for valid string', () => {
            const sut = getStringInfo;

            const actual = sut('My-string');

            expect(actual.lowerCase).toBe('my-string');
            expect(actual.extraInfo).toEqual({ length: 9 });
            expect(actual.extraInfo).not.toBe(undefined);
            expect(actual.character).toHaveLength(9);
            expect(actual.character).toContain('M');
            expect(actual.character).toEqual(
                expect.arrayContaining(['M', 's', 't', 'y', '-', 'r', 'i', 'n', 'g'])
            );
        })
    });

    describe('To upper case example', () => {
        it.each([
            { input: 'abc', expected: 'ABC' },
            { input: 'hEllO', expected: 'HELLO' },
            { input: 'abcDeF', expected: 'ABCDEF' }
        ])('$input should be $expected', ({ input, expected }) => {
            const actual = toUpper(input);
            expect(actual).toBe(expected);
        })
    })
})