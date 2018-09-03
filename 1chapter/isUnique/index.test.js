const isUnique = require('./index');


describe('isUnique string checker', () => {
  test('should return false when string is not unique', () => {
    expect(isUnique('benjamin')).toBe(false);
  });

  test('should return true when string is unique', () => {
    expect(isUnique('samuel')).toBe(true);
  });
})
