import getHoursMinutes from '..';
import addZeroPadding from '../../addZeroPadding';

describe('getHoursMinutes', () => {
  it('should return a time in the format, 13:00 (hh:mm) from a unix timestamp', () => {
    // depends on UTC time, if there is a timezoneOffset, this test will fail
    const date = new Date(1527842509000); // 08:41 UTC time
    const hours = date.getHours();
    const minutes = date.getMinutes();

    expect(getHoursMinutes(1527842509000)).toBe(
      `${addZeroPadding(hours)}:${addZeroPadding(minutes)}`,
    );
  });
});
