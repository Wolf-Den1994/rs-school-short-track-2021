/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const str1 = s1.split('').sort();
  const str2 = s2.split('').sort();
  const arr1 = {};
  const arr2 = {};
  let count = 0;
  let count1 = 1;
  let count2 = 1;
  for (let i = 0; i < str1.length; i += 1) {
    arr1[str1[i]] = count1;
  }
  for (let i = 0; i < str2.length; i += 1) {
    arr2[str2[i]] = count2;
  }
  for (let i = 0; i < str1.length; i += 1) {
    if (str1[i] === str1[i + 1]) {
      count1 += 1;
      arr1[str1[i]] = count1;
    } else {
      count1 = 1;
    }
  }
  for (let i = 0; i < str2.length; i += 1) {
    if (str2[i] === str2[i + 1]) {
      count2 += 1;
      arr2[str2[i]] = count2;
    } else {
      count2 = 1;
    }
  }
  const keys1 = Object.keys(arr1);
  const keys2 = Object.keys(arr2);
  for (let i = 0; i < keys1.length; i += 1) {
    for (let j = 0; j < keys2.length; j += 1) {
      if (keys1[i] === keys2[j]) {
        if (arr1[keys1[i]] > arr2[keys2[j]]) {
          count += arr2[keys1[i]];
        } else if (arr1[keys1[i]] < arr2[keys2[j]]) {
          count += arr1[keys2[j]];
        } else {
          count += arr2[keys2[j]];
        }
      }
    }
  }
  return count;
}

module.exports = getCommonCharacterCount;
