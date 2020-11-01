/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  if (str == '' || str == null) {
    return str;
  }
  // разбиваем строку на массив по дефисам
  let arr = str.split('-');
  // приводим первый символ к заглавному и собираем массив в строку
  return arr.map((item, index) => (index == 0) ? item : ucFirst(item)).join('');
}

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