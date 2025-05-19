import { PasswordChecker, CheckResult, PasswordErrors } from "../app/passwordChecker"

describe('Password Checker test suite', () => {

    let sut: PasswordChecker;
    beforeEach(() => {
        sut = new PasswordChecker();
    })

    it('Password with less than 8 character is invalid', () => {
        const actual: CheckResult = sut.checkPassword('1234567');
        expect(actual.reason).toContain(PasswordErrors.SHORT)
    });

    it('Password with more than 8 character is valid', () => {
        const actual: CheckResult = sut.checkPassword('123456789');
        expect(actual.reason).not.toContain(PasswordErrors.SHORT)
    });

    it('Password with 8 character is valid', () => {
        const actual: CheckResult = sut.checkPassword('12345678');
        expect(actual.reason).not.toContain(PasswordErrors.SHORT)
    });

    it('Password with no uppercase is invalid', () => {
        const actual: CheckResult = sut.checkPassword('abcdefghijk');
        expect(actual.reason).toContain(PasswordErrors.NO_UPPER_CASE)
    });

    it('Password with no lowercase is invalid', () => {
        const actual: CheckResult = sut.checkPassword('ABCDERFGHIJ');
        expect(actual.reason).toContain(PasswordErrors.NO_LOWER_CASE)
    });

    it('Complex Pasword is Valid', () => {
        const actual: CheckResult = sut.checkPassword('ABC1234abcde');
        const expected: CheckResult = {
            isValid: true,
            reason: []
        }

        expect(actual).toEqual(expected);
    })
})