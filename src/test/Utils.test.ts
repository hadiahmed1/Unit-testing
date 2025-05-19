import { toUpper } from "../app/Utils"

 describe('Ustils test suite',()=>{
    test('should return upper case of string',()=>{
        const result = toUpper('abc');
        expect(result).toBe('ABC');
    })
 })