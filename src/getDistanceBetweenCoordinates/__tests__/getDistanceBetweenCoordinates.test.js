import getDistanceBetweenCoordinates from '..';

describe('getDistanceBetweenCoordinates()', () => {
  it('should work', () => {
    const setA = {
      lat: -33.881942,
      lng: 18.4228732,
    };
    const setB = {
      lat: -33.93861,
      lng: 18.4657513,
    };
    const distance = 7.440559689826529;

    expect(getDistanceBetweenCoordinates(setA, setB)).toEqual(distance);
  });
});
