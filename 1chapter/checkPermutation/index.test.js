const checkPermutation = require('./index.js');


describe('checkPermuation', () => {
  it('should return true if strings are permutations', () => {
    expect(checkPermutation('anna', 'anan')).toBe(true);
  });

  it('should return false if strings are not permutations', () => {
    expect(checkPermutation('benjamin', 'samuel')).toBe(false);
  });
});