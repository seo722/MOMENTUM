//반환값

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multi: function (a, b) {
    return a * b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const plusResult = calculator.plus(100, 10);
const minusResult = calculator.minus(plusResult, 10);
const divideResult = calculator.divide(minusResult, 10);
const multiResult = calculator.multi(divideResult, minusResult);
const powerResult = calculator.power(minusResult, 2);

console.log(powerResult);
