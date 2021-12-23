//복습
//arrays, object
const toBuy = ["potato", "tomato", "water", "pizza", "tteokboki"];

document.write(toBuy); //출력
toBuy[2] = "cidar"; //수정
toBuy.push("jacket"); //추가

const player = {
  name: "seo",
  age: 24,
};

console.log(player);
player.name = "mino"; //수정
console.log(player);
player.sexy = true; //추가
console.log(player);

//function
const calculator = {
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  multi: function (a, b) {
    console.log(a * b);
  },
  power: function (a, b) {
    console.log(a ** b);
  },
};

calculator.add(50, 50);
calculator.minus(110, 10);
calculator.divide(1000, 10);
calculator.multi(25, 4);
calculator.power(10, 2);
