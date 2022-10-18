const buttonElement = document.getElementById('btn-click');

buttonElement.onclick = function() {
  let x = +prompt('Введите первое число');
  let y = +prompt('Введите второе число');
  let z = prompt('Введите знак операции: + - * /');

  if (z === '+') {
      alert(`Результат равен ${x + y}`);
  } else if (z === '-') {
    alert(`Результат равен ${x - y}`);
  } else if (z === '*') {
    alert(`Результат равен ${x * y}`);
  } else if (z === '/') {
    alert(`Результат равен ${x / y}`);
  } else {
    alert(`Неверный знак операции`);
  }
}