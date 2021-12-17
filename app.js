const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  //greeting.innerText = "Hello " + username;
  greeting.innerText = `Hello ${username}`;
  //string 안에 변수를 넣고 싶을 때
  //`string ${변수}`

  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

//default behavior 기본 동작
//submit의 기본 동작 : 새로고침
//a(링크)의 기본 동작 : 링크로 페이지 옮기기
