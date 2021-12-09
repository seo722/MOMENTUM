//function
function sayHello(nameOfPerson, age) {
  console.log("hello my name is " + nameOfPerson + " and I'm " + age + ".");
}

sayHello("seo", 24);
sayHello("mino", 40);
sayHello("yuki", 2);

function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}
function divide(a, b) {
  console.log(a / b);
}

plus(60, 6);
divide(10, 2);

const player = {
  name: "seo",
  sayHello: function (otherPersonsName) {
    console.log("hello! " + otherPersonsName + " nice to meet you!");
  },
};

player.sayHello("mino");
player.sayHello("moka");
player.sayHello("yuki");

function plus(a, b) {
  console.log(a + b);
}

plus(1, 3);
