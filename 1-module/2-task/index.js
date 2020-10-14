/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  // преобразуем имя пользователя в массив символов
  let arr = Array.from(name || '');
  let len = arr.length;

  // у пользователя пустое имя или длина имени меньше 4 символов
  if (name == null || name == '' || len < 4) {
    return false;
  }
  
  //у пользователя в имени есть пробел
  for (let i = 0; i < len; i++) {
    if (arr[i] == ' ') {
        return false;
    }
  }

  return true;

}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
