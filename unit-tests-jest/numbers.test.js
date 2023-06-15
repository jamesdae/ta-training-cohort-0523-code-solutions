import { divideBy, evenNumbers, multiplyBy, toDollars } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    expect(evenNumbers([1, 2, 3, 4, 5, 0])).toEqual([2, 4, 0]);
  });
  it('works with an empty array', () => {
    const numbers = []; // act phase
    const result = evenNumbers(numbers); // arrange phase
    expect(result).toEqual([]); // assert phase
  });
});

describe('divideBy', () => {
  it('divides each element by the divisor', () => {
    const result = divideBy([2, 4, 6, 8], 2);
    expect(result).toEqual([1, 2, 3, 4]);
  });
  it('does not modify the original array', () => {
    const numbers = [2, 3, 4, 10];
    const result = divideBy(numbers, 2);
    expect(result).toEqual([1, 1.5, 2, 5]);
    expect(numbers).toEqual([2, 3, 4, 10]);
  });
});

describe('multipyBy', () => {
  it('multiplies number values', () => {
    const object = { foo: 1, bar: 3 };
    const result = multiplyBy(object, 2);
    expect(result).toEqual({ foo: 2, bar: 6 });
  });
  it('does not multiple string values', () => {
    const obj = { foo: 2, bar: '2' };
    const result = multiplyBy(obj, 2);
    expect(result).toEqual({ foo: 4, bar: '2' });
  });
});

describe('toDollars', () => {
  it('formats integeres as dollars and cents', () => {
    const result = toDollars(4);
    expect(result).toEqual('$4.00');
  });
  it('formats decimals with just two digits, rounding up', () => {
    const result = toDollars(5.399333);
    expect(result).toEqual('$5.40');
  });
});
