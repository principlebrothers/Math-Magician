import operate from './operate';

describe('operations', () => {
    test('it adds numbers', () => {
        expect(operate(2, 2, '+')).toBe('4');
    });
    test('it subtracts numbers', () => {
        expect(operate(2, 2, '-')).toBe('0');
    });
    test('it multiplies numbers', () => {
        expect(operate(2, 2, 'x')).toBe('4');
    });
    test('it divides numbers', () => {
        expect(operate(2, 2, '÷')).toBe('1');
    });
    test('modulo test', () => {
        expect(operate(5, 2, '%')).toBe('1');
    });
});
