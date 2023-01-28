import { sum } from '../index';

describe('sum', () => {
  it('should work', () => {
    expect(sum(2, 3, 4, 5)).toEqual(14);
  });
});
