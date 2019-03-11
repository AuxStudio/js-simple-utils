import validateIDNumber from '..';

describe('validateIDNumber()', () => {
  it('should work', () => {
    const invalidID = 9202204720082;
    const validID = 8801235111088;

    expect(validateIDNumber(invalidID)).toBe(false);
    expect(validateIDNumber(validID)).toBe(true);
  });
});
