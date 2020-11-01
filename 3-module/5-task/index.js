/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  // вспомогательный массив
  let arr = [];
  // разбиваем исходную строку по пробелам, затем каждый получившийся элемент разбиваем по запятым и получаем массив массивов
  let result = str.split(' ').map((item) => item.split(','));
  // проходим по массиву массивов и собираем вспомогательный массив из всех элементов исходного
  for (item of result) {
    arr = arr.concat(item);
  } 
  // убираем пустые элементы и пустые строки
  result = arr.filter(item => item != null && item != '')
              // приводим элементы к числам
              .map(item => Number(item))
              // убираем NAN
              .filter((item) => !Number.isNaN(item))
              //сортировка массива по возрастанию
              .sort((a, b) => a-b);
  return {
    min: result[0],
    max: result[result.length -1]

  };
}