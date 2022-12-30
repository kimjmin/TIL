// 4.0 실제 앱 개발 시작
const loginForm = document.querySelector('#login-form');
const logintInput = loginForm.querySelector("input");
const logintbutton = loginForm.querySelector("button");


function onLoginBtnClick(event){
  event.preventDefault();  // stop default behavior
  console.log(event);
  const userName = logintInput.value;
  console.log(userName);
}

// logintbutton.addEventListener("click", onLoginBtnClick)
loginForm.addEventListener("submit", onLoginBtnClick);
// onLoginBtnClick(info) 정보를 담고 반환함