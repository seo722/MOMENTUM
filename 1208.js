/*boolean*/
const amIFat = null;
let something;
/*userlogin?true or false*
true=on=1, false=off=0, 
null=nothing=not empty, full of nothing: never happen automatically
undefined=변수가 메모리에 존재하지만 값이 없음*/

///Arrays
//Get Item from Array
const daysOfWeek = ["mon", "tue", "wed", "tue", "fri", "sat"];
console.log(daysOfWeek[5]);
console.log(daysOfWeek);

//Add one more day to the array
daysOfWeek.push("sun");

//Objects
//player:object, namePointsFat:property
const player = {
  name: "seo",
  points: 10,
  fat: false,
};

console.log(player);
console.log(player.fat);
console.log(player["fat"]);

//업데이트, 추가
player.fat = true;
player.lastName = "potato";
player.age = 24;

console.log(player.fat);
console.log(player);

player.age = player.age + 1;

console.log(player.age);
