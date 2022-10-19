const buttonElement = document.getElementById('btn-click');

buttonElement.onclick = function() {
  const x = parseFloat(prompt('Введите первое число'));
  const y = parseFloat(prompt('Введите второе число'));
  const z = prompt('Введите знак операции: + - * /');

  if (isNaN(x) || isNaN(y)) {
    alert(`Неверное значение! Перезагрузите страницу и введите корректные значения!`);
  } else {
    
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
}
