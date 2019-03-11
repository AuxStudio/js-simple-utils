import reorderArrayItems from '..';

describe('reorderArrayItems()', () => {
  it('should work', () => {
    const array = [1, 2, 3];
    const reorderedArray = [1, 3, 2];

    expect(reorderArrayItems(array, 2, 1)).toEqual(reorderedArray);
  });
});
