/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  if (obj == null) {
    return true;
  }

  return Object.keys(obj).length == 0;
}
