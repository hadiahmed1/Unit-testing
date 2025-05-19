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

    it('should return string info for valid string', () => {
        const sut = getStringInfo;

        const actual = sut('My-string');

        expect(actual.lowerCase).toBe('my-string');
        expect(actual.extraInfo).toEqual({});
        expect(actual.extraInfo).not.toBe(undefined);
        expect(actual.character).toHaveLength(9);
        expect(actual.character).toContain('M');
        expect(actual.character).toEqual(
            expect.arrayContaining(['M', 's', 't', 'y', '-', 'r', 'i', 'n', 'g'])
        );
    })
})