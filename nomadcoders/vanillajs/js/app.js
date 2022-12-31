// 4.0 실제 앱 개발 시작
const loginForm = document.querySelector('#login-form');
const logintInput = loginForm.querySelector("input");
const logintbutton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function onLoginBtnClick(event){
  event.preventDefault();  // stop default behavior

  // console.log(event);
  const userName = logintInput.value;
  loginForm.classList.add(HIDDEN_CLASS);  // 전송 버튼 누르면 폼 전체 숨김
  console.log(userName);
  localStorage.setItem(USERNAME_KEY, userName);
  // greeting.innerText = "Hello " + userName + " !!";
  // greeting.innerText = `Hello ${userName}!!`; //백틱 기호 : +로 합친것과 효과는 같음. 변수를 안에서 사용할 수 있게 해 줌.
  // greeting.classList.remove(HIDDEN_CLASS);
  // 반복되는 로직은 함수로 만들어줌
  paintGreetings(userName);
}

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASS);
  greeting.innerText = `Hello ${username} !!!`
}



// logintbutton.addEventListener("click", onLoginBtnClick)

// loginForm.addEventListener("submit", onLoginBtnClick);
// onLoginBtnClick(info) 정보를 담고 반환함

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null ){
  // show the form
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", onLoginBtnClick);
} else {
  // show greetings
  // greeting.classList.remove(HIDDEN_CLASS);
  // greeting.innerText = `Hello ${savedUsername} !!!`
  // 반복되는 로직은 함수로 만들어줌
  paintGreetings(savedUsername);
}