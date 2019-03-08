import validateCellNumber from '..';

describe('validateCellNumber()', () => {
  it('should work with a null value', () => {
    expect(validateCellNumber()).not.toEqual(true);
  });

  it('should work with a valid value', () => {
    expect(validateCellNumber('0833771130')).toEqual(true);
  });

  it('should work with a valid universal value', () => {
    expect(validateCellNumber('+27833771130')).toEqual(true);
  });

  it('should work with spaces', () => {
    expect(validateCellNumber('083 377 1130')).not.toEqual(true);
  });

  it('should work with alpha characters', () => {
    expect(validateCellNumber('abc')).not.toEqual(true);
  });
});
