/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let result = '';
  // ищем пользователей по условию и собираем строку вывода
  for (item of users) {
    result += (item.age <= age) ? `\n${item.name}, ${item.balance}` : ``;
  }
  // удаляем первый символ перевода строки, если строка не равна пустой строке
  return (result !== '') ? result.slice(1, result.length) : result;
}
