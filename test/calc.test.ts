import { add, substract } from '../src/calc';

describe('test add function', () => {
  it('should return 15 for add(10,5)', () => {
    expect(add(10, 5)).toBe(15);
  });
  it('should return 5 for add(2,3)', () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe('test substract function', () => {
  it('should return 5 for substract(10,5)', () => {
    expect(substract(10, 5)).toBe(5);
  });
  it('should return -1 for substract(2,3)', () => {
    expect(substract(2, 3)).toBe(-1);
  });
});
