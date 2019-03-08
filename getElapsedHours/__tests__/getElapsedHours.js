import getElapsedHours from '..';

describe('getElapsedHours', () => {
  it('should work', () => {
    const oneHourInMS = 1000 * 60 * 60; // ms * s * min
    const threeHoursAgo = Date.now() - oneHourInMS * 3;
    const fortyHoursAgo = Date.now() - oneHourInMS * 40;

    expect(getElapsedHours(threeHoursAgo)).toEqual(3);
    expect(getElapsedHours(fortyHoursAgo)).toEqual(40);
    expect(getElapsedHours()).toEqual(0);
  });
});
