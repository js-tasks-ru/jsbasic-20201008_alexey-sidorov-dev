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

  // у пользователя пустое имя или длина имени меньше 4 символов
  if (name == null || name == '' || name.length < 4) {
    return false;
  }
  
  //у пользователя в имени есть пробе
  return !name.includes(' ');

}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
