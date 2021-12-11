const age = parseInt(prompt("How old are you?"));

//prompt 경고창 띄우고 사용자에게 값을 받는 함수
//parseInt() === 문자열의 숫자를 숫자 데이터타입으로 변환]
//string > number
//"15" > 15
//isNaN === this is Not a Number 를 묻는 함수

if (isNaN(age) || age < 0) {
  console.log("정수만 입력 가능합니다.");
  /// condition === true
} else if (age < 18) {
  console.log("18세 이하는 음주 불가");
} else if (age >= 18 && age <= 50) {
  console.log("감사합니다");
} else if (age > 50 && age <= 80) {
  console.log("운동을 하는 것이 좋습니다.");
} else if (age > 80) {
  console.log("하고 싶은 것을 하세요");
}

// && === and, || === or
