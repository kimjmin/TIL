레퍼런스  : MDN : https://developer.mozilla.org
## 1. Intro
- const : `const c1 = "aaa"`    // 값 변경 불가능
- let : `let l1 = "ddd"`      // 값 변경 가능
- 가능하면 const 를 기본으로 쓰도록 할것.
- const 가 object 형식인 경우 내부 값들은 변경이나 추가 가능
```javascript
const player = {
    name: "jong", points: 100, fat: false
}
player.name = "min";
player.lastname = "kim";
```
- 불리언이 가질 수 있는 값
  - const b1 = `true`;
  - const b2 = `false`;
  - const b3 = `null`;        // 값 없음
  - const b4 = `undefined`;   // 정의되지 않음

## 2. Welcome to Javascript
- 제곱연산자(power) : `**` : `3**3 === 27`
- 콘솔에 엘리먼트 내용 다 출력 : `console.dir(document)`
- 값의 타입을 반환하는 함수 : `typeof "15"`
- 숫자로 변경 : `parseInt("15")` / 숫자가 아닌 경우 : `typeof parseInt("15")` === `NaN` 반환됨
- 숫자 여부 체크 : 
```javascript
if(isNaN(age)){
    console.log("please write number")
} else if(parseInt(age) < 18){
    console.log(`You are ${age} years old. You are too young`);
} else {
    console.log(`You are ${age} years old. You can drink`);
}
```

## 3. Javascript on the browser
- html 엘리먼트 가져오는 방법들
  - id : `document.getElementById("username");` : 단일값
  - class : `document.getElementsByClassName("hidden");` : 배열
  - tag : `document.getElementsByTagName("h1");` : 배열
  - queryselector : `document.querySelector("div.hello:first-child h1");` : 단일값 (여러개인 경우 첫 엘리먼트)
  - queryselectorAll : `document.querySelectorAll("div h1");` : 배열
- 특정 클래스값만 추가 / 제거 : `form.classLlist.add(CLASS_NAME);` / `form.classLlist.remove(CLASS_NAME);`

## 4. 로그인 기능
- `<input required maxlength="15" ... >` 의 기본 제공 기능은 `<form></form>` 태그 안에서만 동작함
- 모든 이벤트리스터에서 호출되는 함수는 `event` 인자를 가지고 있음 : `function onLoginBtnClick(event){ ... }`
- 기본 동작 하지 않도록 제동 : `event.preventDefault();` 
- 자주 사용하는 변수나 클래스명은 상수로 만들어 놓을것 `const HIDDEN_CALSSNAME = "hidden";`
- 세션 정보 저장 가능한 기본 아이템 : `localStorage`
- 백틱 문자를 이용해서 ${변수명} 으로 문자열 표현 가능 : 
``` `Hello ${name}` ```

## 5. Clock
- 폴더 생성 : css / js | 파일 나누기 : greetings.js / clock.js
- Interval : 매 ?초 마다 주기적으로 실행. 인자 2개 : (함수, 주기-밀리초)
```javascript
setIntervla(sayHello, 5000);
```
- Timeout : 일정 시간이 지난 후에 딱 한번만 실행 인자 2개. (함수, 대기-밀리초)
```javascript
setTimeout(sayHello, 5000)
```
- Date object : `new Date()` : 현재 날짜 반환
```javascript
const date = new Date();
date.getDay();
date.getFullYear();
```
- `padStart` : 0 이 아니라 00 으로 표시하기. padEnd 도 있음. 숫자는 사용 불가. String 만 가능.
```javascript
"1".padStart(2, "0); // 문자열 길이가 2 가 안되면 앞자리 0으로 채움
String(new Date().getHours()).padStart(2, "0");
```

## 6. Quotes / background
- 명언들을 배열 안에 객체로 입력.
```
const quotes = [
  {"quote": "aaaa", "author" : "me"}
, {"quote": "bbbb", "author" : "you"}
] 
```
- 한줄 입력 : `<span></span>`
- Math 모듈 : Math.PI 등 사용. 
- 랜덤 : `Math.random()` : 0~1 사이의 무작위 값.
  - Math.round() - 반올림 
  - Math.ceil()  - 올림
  - Math.floor() - 버림
```javascript
// 1~10 사이의 랜덤값
Math.floor(Math.random()*10);
// 실제로는 10 대신 배열의 길이 넣어줄것. quote.length
```  
- 사진 배열을 이용해서 랜덤 배경화면 생성.
```javascript
const images = ["0.jpg", "1.jpg", "2.jpg"]
```
- 배경으로 지정
```javascript
const bgImage = document.createElement("img");  // 엘리먼트 생성. 아직 DOM 에는 없음.
bgImage.src = `img/${chosenImage}`  // <img src="img/0.jpg" />
document.body.appendChild(bgImage); // <body> 안에 img 태그 넣어줌.
```

## 7. To do list.
- li, span 생성. li 안에 span 추가. 다시 ul 안에 li 추가. 지금까지 배운걸로 응용.
- span 다음에 button 생성. 추가.
- 버튼의 eventlistener 호출 --> event 안에 path, parent 가 다름. 이것으로 버튼 순서 구분.
```javascript
functions deleteTodos(event) {
  console.dir(event.target.parentElement.innerText);  //클릭된 버튼의 parentElement 로 부모 li 판단.
  const li = event.target.parentElement;
  li.remove(); // 삭제
}
```
- 배열에 저장 : `const toDos = []; toDos.push(li);`
- 로컬 스토리지에 저장 : `localStorage.setItem(toDos);` : 로컬 스토리지는 string 만 저장 가능.
- 배열을 스트링으로 저장하고 불러오기 : JSON 모듈 사용
```javascript
localStorage.setItem("todos", JSON.stringify(toDos));
const toDosV = localStorage.getItem("todos");
if(toDosV !== null) {  //로컬스토리지에 있을때만.
  const toDosA = JSON.parse(toDosV);
}
```
- `foreach` : 배열값으로 li 다시 그리기. 배열에서 제공하는 `forEach()` 사용. 배열 길이만큼 반복 실행.
```javascript
paintLi(item){  // 배열의 각 값들 인자로 순서대로 전달.
  console.log(item);
}
toDosA.forEach(paintLi);
```
- 아래와 같이 사용도 가능 동일한 동작.
```javascript
toDosA.forEach((item) => console.log(item));
```
- 처음 배열 선언도 로컬 스토리지로 변경. const ==> let
```javascript
let toDots = [];
...
if(toDosV !== null) {  //로컬스토리지에 있을때만.
  const toDosA = JSON.parse(toDosV);
  toDots = toDosA;
}
```
- 삭제하면 localStorage 에서도 삭제. localStorage 는 실제 array 가 아니기 때문에 부분삭제 불가. ID 필요.
  문자 대신 객체 저장. `Date.now()` 를 이용해서 랜덤ID 생성. (실제로는 타임스탬프)
```javascript
const liObj = { text: newTodo, id: Date.now() }
todos.push(liObj);
li.id = liObj.id; // <li id="123123124124">aaaa</li>
```
- `filter()` : 배열에서 필요한것만 골라내기.
```javascript
// keep 하고 싶은건 return true 할것. false 리턴되면 배열에서 삭제.
function sexyFilter(item){ return item !== 3 }
[1, 2, 3, 4].filter(sexyFilter);
```
또는 
```javascript
[1, 2, 3, 4, 5].filter(item => item > 3);
```
- id 삭제하려면 타입 잘 맞출것. 숫자, 문자.
```javascript
functions deleteTodos(event) {
  const li = event.target.parentElement;
  li.remove(); // 삭제
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
}
```

## 8. Geolocation / Weather
- 위치정보 가져오기 : `navigator.geolocation.getCurrentPisition()`
  - 인자 2개 (function 타입) : (성공, error)
```javascript
function onGeoOk(position){  //position 인자 반환
  console.dir(position);
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
}
function onGeoError(){ }
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
```
- 날짜 가져오는 API : https://openweathermap.org/api
```
https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
```
- API Key 는 sign in 하면 나옴.
- API URL 호출. `fetch` 를 사용해서 API 값 가져옴.
```javascript
const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${API key}`
fetch(url);
```
- fetch 는 promise 이기 때문에 즉각적으로 동작하지 않음. `.then()` 을 사용해야 함.
```javascript
fetch(url).then(
  (response) => response.json())
  .then((data) => { 
    console.log(data.name, data.weather[0].main); 
    // TODO : HTML 에 값 넣어주기.
  });
```
