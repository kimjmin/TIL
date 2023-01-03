## 1. intro

## 2. Basic of React
- ReactJS 탄생 이유 : UI 인터렉티브하게. (상호 작용)
- React 없이 바닐라로 버튼 카운터 구현: 
```javascript
  let counter = 0;
  const button = document.querySelector("button#btn");
  const span = document.querySelector("span");
  function handleClick(){
    counter++;
    console.log("clicked : "+counter);
    span.innerText = `Total Clicks : ${counter} `;
  }
  button.addEventListener("click", handleClick);
```
- React 로 구현
  - 라이브러리 로드 : [CDN 링크](https://ko.reactjs.org/docs/cdn-links.html)
  - 엘리먼트 생성 : `React.createElement(태그, 프로퍼티, 내용);` - 번거로운 방법이라 안 씀.
```javascript
// 어려운 방법
const root = document.getElementById("root");
  // React.createElement(태그, 프로퍼티, 내용);
  const h3 = React.createElement("h3", {
    "id": "sexy-span", "style": {"color": "red"},
    onMouseEnter: () => console.log("mouse enter") }, "스판"); // 프로퍼티에 이벤트 리스너 줄 수 있음
  const btn = React.createElement("button", {
    onClick:() => console.log("cicked")
  }, "Click Me"); // 프로퍼티에 이벤트 리스너 줄 수 있음
  const container = React.createElement("div", null, [h3, btn]);
  ReactDOM.render(container, root); //html dom 에 추가
```
- jsx 사용 : js 에서 html 과 유사한 문법으로 eliment 컨트롤.
  - jsx 사용 가능하도록 설치 : [Babel](https://babeljs.io/docs/en/babel-standalone#installation)
```javascript
<script src="https://unpkg.com/@babel/standalone@7.20.11/babel.min.js"></script>
<script type="text/babel">  //jsx : 바벨 사용하려면 추가해줘야 함.
const root = document.getElementById("root");
// function Title () { retun (<h3>...</h3>) } 과 const Title = () => (<h3>...</h3>); 둘은 같은 로직
function Title() { 
  return (<h3 id="title" onMouseOver={() => console.log("over")} >title</h3>);
}
const Btn = () => (
  <button style={{backgroundColor: "tomato"}} onClick={()=> console.log("clicked")}>Click me</button>
);
// 직접 만든 요소는 반드시 대문자로 시작해야 함. 안그러면 html 엘리먼트로 판단.
const Container = () => (<div> <Title /> <Btn /> </div>);
  ReactDOM.render(<Container/>, root); //html dom 에 추가
</script>
```

## 3. State
- state : 데이터가 저장되는 곳.
- 카운터 화면에 추가. 랜더링 다시 해줌.
```javascript
let counter = 0;
// { } 안에 변수 넣으면 됨.
function countUp(){ 
  counter++;
  // 랜더링 한번만 되기 때문에 변수는 증가하지만 호면에 다시 그려지진 않음. onClick 할 때 마다 다시 랜더링 해야 함.
  reRender();
}
function reRender(){ ReactDOM.render(<App/>, root); }
function App (){ return (<div>
 <h3 id="title" >Total Clicks : {counter}</h3>
    <button onClick={countUp}>Click me</button> 
  </div>);
}
reRender();
```
- React 는 바뀐 부분만 판단해서 업데이트함. {count} 기존 버튼 같은 태그는 그대로 유지됨.
- 자동으로 랜더링 트리거 등록 : `React.useState()` (변수, 함수). 함수는 랜더링 자동으로 함.
```javascript
function App () {
   [counter, modifier] = React.useState(0); // const [a, b] = ["a", "b"] 각 선언에 배열값을 각각 전달. JS 기본 문법.
  const onClick = () => {
    modifier(counter+1); // 함수를 실행시키면서 랜더링도 자동으로 함. count++ 하면 let 로 해야 하는데 오작동.
  }
  return (<div>
 <h3 id="title" >Total Clicks : {counter}</h3>
    <button onClick={onClick}>Click me</button> 
  </div>); 
}
ReactDOM.render(<App/>, root);
```
- modifier 는 App() 함수를 새로 써서 다시 실행시킴.
- 현재 state 값을 가지고 계산 `setCounter((current) => current+1);`
- `https://unpkg.com/react@18/umd/react.production.min.js` 이걸 dev 로 바꾸면 에러 더 많이 잡아냄.
- 분 ==> 시 | 시 ==> 분 으로 변환하는 기능.
  - minutes 값으로 hours 값 계산 반영
  - resetMin : min 폼 리셋
  - flip : 분 / 시 각각 disabled 전환
  - modifier 함수 안에 현재 상태 변수 새로 선언해서 사용 : `setFlip((current) => !current);`
  - if 문 한줄 3항 연산자 : `(조건) ? 참 : 거짓` 사용. flip 이면 제값. 아니면 계산값
```javascript
function App () {
  const [amount, setAmount] = React.useState();
  const [flip, setFlip] = React.useState(false);
  function onChange(event) { //바닐라js 처럼 사용 가능.
    // console.log(event.target.value);
    setAmount(event.target.value);
  };
  const resetMin = () => setAmount(0);
  const onFlip = () => {
    resetMin();
    setFlip((current) => !current); // setFlip(!flip) 보다 이렇게 하는게 안전함.
  }
  // react 에서는 그냥 for 대신 htmlFor 써야 함. react.dev.min.js 하면 오류 표시됨.
  return (<div>
    <h1>Super Converter</h1>
    <div>
      <label htmlFor="mins">Amount</label>
      <input id="mins" placeholder="분" type="number" value={flip ? amount * 60 : amount} onChange={onChange} disabled={flip === true}/>
    </div>
    <div>
      <label htmlFor="hours">Hours</label>
      <input id="hours" placeholder="시" type="number"  value={flip ? amount : Math.round(amount / 60)} onChange={onChange} disabled={flip === false}/>
    </div>
    <button onClick={resetMin}>Reset</button>
    <button onClick={onFlip}>Flip</button>
  </div>); 
}
ReactDOM.render(<App/>, root);
```
- 챌린지 : 컴포넌트 복사해서 <select> 태그 안에서 선택한 컴포넌트만 보이도록. `<MinsToHours /> <KmToMiles>`
```javascript
const KbToMiles = () => { ... }
const MinsToHours = () => { ... }
function App() {
  const [selected, setSelected] = React.useState("0");
  const onSelected = (event) => {
    setSelected(event.target.value);
  }
  return (<div>
    <h1>Super Converter</h1>
    <select value={selected} onChange={onSelected}>
      <option value="0">Minutes to Hours</option>
      <option value="1">Kilometer to Miles</option>
    </select>
    <hr/>
      {selected === "0" ? <MinsToHours /> : null}
      {selected === "1" ? <KbToMiles /> : null}
  </div>);
}
```

## 4. Props
- 각 기능들을 컴포넌트로 만들어 서로 포함.
- Props : 부모 컴포넌트에서 자식 컴포넌트로 값을 전달하는 방법.
- 사용하는 컴포넌트 태그에서 넣어준 값들이 props 의 인자로 들어감.
```javascript
const Btn = (props) => {
  //사용하는 컴포넌트 태그에서 넣어준 값들이 props 의 인자로 들어감. ({kjmVal, big}) 로 바로 써줘도 됨.
  console.dir(props);
  return (<button
     style={{
      backgroundColor: "tomato", color: "white", 
      margin: "10px", padding: "10px", border: 0, borderRadius: 5,
      fontSize: props.big ? 18 : 12,
    }} >
  {props.kjmVal}
  </button>);
}
function App () {
  return (<div>
    <Btn kjmVal="Save Changes" big={true} />
    <Btn kjmVal="Continue" big={false} />
  </div>);
}
```
- 부모 컴포넌트가 재랜더링 되면 안에 있는 컴포넌트 전부 재랜더링 됨
- 재랜더링 필요없는 자식 컴포넌트 - `React.memo(Btn);`
```javascript
const Btn = (props) => {
  console.log(props.kjmVal);
  return (<button
     style={{
      backgroundColor: "tomato", color: "white", 
      margin: "10px", padding: "10px", border: 0, borderRadius: 5,
      fontSize: props.big ? 18 : 12,
    }} 
    onClick={props.onChange}
    >
  {props.kjmVal}
  </button>);
}
const MemoBtn = React.memo(Btn);  // props 가 변경된 자식만 재랜더링함
function App () {
  const [val, setVal] = React.useState("Save Changes");
  const changeVal = () => setVal("Save Chaged Chaged");
  return (<div>
    <MemoBtn kjmVal={val}  big={true} onChange={changeVal}/>
    <MemoBtn kjmVal="Continue" big={false}/>
  </div>);
}
ReactDOM.render(<App/>, root);
```
- 전달하는 props 타입 체크 : https://reactjs.org/docs/typechecking-with-proptypes.html
```javascript
<script src="https://unpkg.com/prop-types@15.8.1/prop-types.js"></script>
Btn.propTypes = {
  text: PropTypes.string.isRequired, // 필수 필드.
  fontSize: PropTypes.number
}
```
- 잘 안됨. 왜그러지?

## 5. Create React App
- React App 프로젝트를 쉽게 시작 : https://create-react-app.dev
- node.js 설치되어 있으면 `npx` 커맨드 실행 가능.
```sh
npx create-react-app my-app
```
- `npm start` 명령으로 인터랙티브 웹 서버 시작 가능
- nodeJS 에서 실행하기 때문에 import / export 사용 가능.
```javascript
// index.js
import Button from "./Button";
function App(){
  return (
    <div>
      <Button />
    </div>
  );
}

// Button.js
function Button({text}){
  return (<button>{text}</button>;)
}
export default Button;
```
- prop-types 도 npm 으로 설치
```
npm i proo-types
```
- css 도 모듈화 가능. import 해서 접근 가능. html 에서는 랜덤한 클래스명으로 보임. 완벽한 스타일의 분리.
```javascript
// Button.module.css
.btn {
  color: red
}
// Button.js
import styles from "./Button.modules.css";
function Button({text}){
  return (<button clssName={styles.btn}>{text}</button>;)
}
```

## 6. Effects
- `useState()` 컴포넌트가 렌더링 될 때 마다 항상 실행
- `useEffect()` : 컴포넌트 최초 랜더링 시 한번만 실행
```javascript
const App = () => {
  const [counter, setCounter] = React.useState(0);
  const onClick = () => setCounter((prev) => prev + 1);
  console.log("always");
  React.useEffect(() => { console.log("only once"); }, []);
  return (
<div>
  <h1>{counter}</h1>
  <button onClick={onClick}>Click</button>
</div>
  );
}
```
- 특정 값이 변했을 때만 렌더링하도록 설정.
```javascript
React.userEffect(() => {
  if(keyword !== "" && keyword.length > 5){ 
    console.log("Search for", keyword);
  }
}, [keyword] ); // keyword 값이 바뀌었을때만 랜더링.
```
- 컴포넌트가 파괴 (destroyed) 될 때 실행 : uesEffect 안에서 실행하는 함수에서 리턴하는 함수.
```javascript
function Hello() {
  function destroyedFn() { console.log("bye"); }  // Hello 컴포넌트 파괴될 때 실행
  function createdFn() {  // Hello 컴포넌트 랜더링 될 때 실행
    console.log("hello"); 
    return destroyedFn;
  }
  React.useEffect( createdFn , []);
  return ( <h1>Hello</h1> );
}
function App() {
  const [showing, setShowing] = React.useState(false);
  const onClick = () => setShowing((prev) => !prev)
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}> {showing ? "hide" : "show" } </button>
    </div>
  );
}
```

### 다음장 부터는 [../kjm-react-app](../kjm-react-app) 에서 진행