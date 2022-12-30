## 1 Intro
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

## 2 Welcome to Javascript
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

## 3 Javascript on the browser
- html 엘리먼트 가져오는 방법들
  - id : `document.getElementById("username");` : 단일값
  - class : `document.getElementsByClassName("hidden");` : 배열
  - tag : `document.getElementsByTagName("h1");` : 배열
  - queryselector : `document.querySelector("div.hello:first-child h1");` : 단일값 (여러개인 경우 첫 엘리먼트)
  - queryselectorAll : `document.querySelectorAll("div h1");` : 배열
- 특정 클래스값만 추가 / 제거 : `form.classLlist.add(CLASS_NAME);` / `form.classLlist.remove(CLASS_NAME);`

## 4 로그인 기능
- `<input required maxlength="15" ... >` 의 기본 제공 기능은 `<form></form>` 태그 안에서만 동작함
- 모든 이벤트리스터에서 호출되는 함수는 `event` 인자를 가지고 있음 : `function onLoginBtnClick(event){ ... }`
- 기본 동작 하지 않도록 제동 : `event.preventDefault();` 
- 자주 사용하는 변수나 클래스명은 상수로 만들어 놓을것 `const HIDDEN_CALSSNAME = "hidden";`
- 세션 정보 저장 가능한 기본 아이템 : `localStorage`