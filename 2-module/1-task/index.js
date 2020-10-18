/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let result = 0;
  for (key in salaries) {
    if (typeof salaries[key] === 'number') {
      result += salaries[key];
    }
  }

  return result;
}
