/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  if (str == null || str == '') {
    return false;
  }
  
  str = str.toLowerCase();

  return /1xbet/g.test(str) || /xxx/g.test(str)
}
