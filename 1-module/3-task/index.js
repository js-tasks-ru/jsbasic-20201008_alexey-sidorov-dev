/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  // пустая строка
  if (str == null || str == '') {
    return str;
  }

  // строку в массив и преобразование первого символа
  var arr = Array.from(str);
  arr[0] = arr[0].toUpperCase();

  return arr.join('');
}
