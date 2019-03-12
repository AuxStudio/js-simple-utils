import getElapsedDays from '..';

describe('getElapsedDays()', () => {
  it('should work', () => {
    const time = Date.now();
    const day = 1000 * 60 * 60 * 24; // ms * sec * min * hr
    const twoDaysAgo = time - 2 * day;

    expect(Math.round(getElapsedDays(twoDaysAgo))).toEqual(2);
  });
});
