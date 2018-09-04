
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
  const sortStr1 = str1.split('').sort().join();
  const sortStr2 = str2.split('').sort().join();

  return sortStr1 === sortStr2;
}


module.exports = checkPermutation;

console.log(checkPermutation('benjamin', 'bennjam'));


