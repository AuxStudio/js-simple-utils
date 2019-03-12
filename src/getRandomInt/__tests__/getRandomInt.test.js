import getRandomInt from '..';

describe('getRandomInt', () => {
  it('should work', () => {
    const min = 0;
    const max = 10;
    const randomInt = getRandomInt(min, max);

    expect(randomInt).toBeGreaterThanOrEqual(min);
    expect(randomInt).toBeLessThan(max + 1);
  });
});
