import cleanObject from '..';

describe('cleanObject()', () => {
  it('should work', () => {
    const dirtyObject = {
      foo: null, // falsy
      bar: true, // truthy
    };
    const cleanedObject = {
      bar: true,
    };

    expect(cleanObject(dirtyObject)).toEqual(cleanedObject);
  });
});
