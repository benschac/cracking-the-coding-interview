
/**
 * Algorithm to determine if a string has all unique characters
 * 
 * 
 * @param {string} string to check unique values
 * 
 * @return {boolean}
 */
function isUnique(string) {

   /** 
    * 
    * Before having to more complex operations.  We can check to see if the
    * string has more value than 128 ASCII values. Which would mean
    * the values aren't unique
    *
    * */
  if (string.length > 128) {
    return false;
  }

  const letters = string.split('');
  const isUnique = {};

  for(let i = 0, l = letters.length; i < l; i++) {
    const letter = letters[i];
    if(isUnique[letter]) {
      return false;
    } else {
      isUnique[letter] = true;
    }
  };

  return true;
}

module.exports = isUnique;