export enum PasswordErrors {
    SHORT = 'too short',
    NO_UPPER_CASE = 'upper case  is required',
    NO_LOWER_CASE = 'lower case  is required',
    NO_NUM = 'number is required'
}

export interface CheckResult {
    isValid: boolean;
    reason?: PasswordErrors[];
}

export class PasswordChecker {
    public checkPassword(pass: string): CheckResult {
        const reasons: PasswordErrors[] = []
        //atleast 8 character
        if (pass.length < 8)
            reasons.push(PasswordErrors.SHORT)
        //have Upper
        if (pass === pass.toLowerCase())
            reasons.push(PasswordErrors.NO_UPPER_CASE)
        //have Lower
        if (pass === pass.toUpperCase())
            reasons.push(PasswordErrors.NO_LOWER_CASE)

        return {
            isValid: reasons.length === 0,
            reason: reasons
        }
    }
}