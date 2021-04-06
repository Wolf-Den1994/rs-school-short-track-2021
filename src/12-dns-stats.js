/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  domains.forEach((i) => {
    const arr = i.split('.').reverse();
    arr.reduce((prev, curr) => {
      const key = `${prev}.${curr}`;
      if (key) {
        if (key in obj) {
          obj[key] += 1;
        } else {
          obj[key] = 1;
        }
      }
      return key;
    }, '');
  });
  return obj;
}

module.exports = getDNSStats;
