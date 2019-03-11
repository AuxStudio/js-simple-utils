import getElapsedDays from '..';

describe('getElapsedDays()', () => {
  it('should work', () => {
    // Mock the date
    const DATE_TO_USE = new Date(1552281656000);
    const _Date = Date;
    global.Date = jest.fn(() => DATE_TO_USE);
    global.Date.UTC = _Date.UTC;
    global.Date.parse = _Date.parse;
    global.Date.now = _Date.now;

    const twoDaysAgo = 1552108856000;

    expect(Math.round(getElapsedDays(twoDaysAgo))).toEqual(2);
  });
});
