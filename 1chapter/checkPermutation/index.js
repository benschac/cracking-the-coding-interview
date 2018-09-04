
/**
 * 1.2 Check if strings are permutations of each other
 *
 * https://en.wikipedia.org/wiki/Permutation
 *  
 * @param {string} str1
 * @param {string} str2
 * 
 * @return {bool}
 */
function checkPermutation(str1, str2) {

  if (str1.length !== str2.length) {
    return false;
  }
  const sortStr = str => str.split('').sort().join();

  const sortStr1 = sortStr(str1);
  const sortStr2 = sortStr(str2);

  return sortStr1 === sortStr2;
}





module.exports = checkPermutation;

console.log(checkPermutation('benjamin', 'bennjam'));


