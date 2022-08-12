import calculate from "./calculate";

describe('Arithmetic Computation', () => {
  test('This is to set the next number to be 4', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };

    expect(calculate(obj, '4').next).toBe('4');
  });

  test('To add 4 + 4  to be 8', () => {
    let obj = {
      total: null,
      next: null,
      operation: null,
    };

    obj = calculate(obj, '4');
    expect(obj.next).toBe('4');

    obj = calculate(obj, '+');
    expect(obj.operation).toBe('+');

    obj = calculate(obj, '4');
    expect(obj.total).toBe('4');

    obj = calculate(obj, '=');
    expect(obj.total).toBe('8');
  });
});