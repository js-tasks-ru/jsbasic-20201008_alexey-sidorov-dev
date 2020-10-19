let calculator = {
  read: function(a, b) {
    this.a = a;
    this.b = b;
  },
  sum: function() {
    return this.a + this.b;
  },
  mul: function(a, b) {
    return this.a * this.b;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
