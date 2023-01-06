## Typescript 존재 이유
- 타입 안전성 때문에. Javascript 의 단점 : 모든것을 허용함.
- `[1, 2, 3, 4] + false => 1,2,3,4,false`
- VS Code 와 아주 아주 잘 맞음. VS Code 가 Typecript 로 만들어졌음.

## Overview
- https://www.typescriptlang.org/play --> Typescript 작성하면 Javascript 로 컴파일 시뮬레이션
- Type inference (타입 추론) 을 함.
- 변수의 타입을 명시해야 함. 추론도 가능.
```typescript
let a = "hello";  // ts 가 a 는 string 이라고 추론
a = "bye";  // string -> string 문제 없음
a = 1;      // ts 오류 발생. javascript 에서는 문제 없음.
let b : boolean = "false";  // 오류남. boolean 이라고 명시했기 때문
let c  = [1, 2, 3] ;  // 배열이 모두 숫자라고 추론
c.push("1");    // 오류남
let c : number[] = [];    // 숫자형 배열 타입 선언.
```
- 모든 타입이 올 수 있는 선언자 `any`
```typescript
let a : number[] = [1, 2];    // let a = [1, 2];
let b : string[] = ["1", "2"];
let c : boolean[] = [true];
const player : { name: string, age?: number} = {
  name : "kjm"  // 이름은 필수로 들어가야 함
  age : 3     // age? 는 없어도 됨.
}
```
- 이미 선언된 타입 가져다 사용하기
```typescript
type Player = {   // 타입 형태 선언
  name: string, age?: number
}
const playerN: Player = {
  name : "Nico"
}
const playerK: Player = {
  name: "kjm", age: 10
}
```
- 함수의 return 타입 지정
```typescript
function playerMaker(name: string){
  return {
    name : name
  }
}
const kjm = playerMaker("kjm");
kjm.age = 10;     // 오류

function playerMaker(name: string) : Player {   // 이렇게 하면 kjm.age = 10; 오류 안 남.
  return {
    name : name
  }
}
// 같은 문법.
const playerArr = (name:string) : Player => ({name: name});
```
- `readonly` 수정 불가능한 프로퍼티 작성 가능.
```typescript
type Player = {
  readonly name: Name,
  age?: Age
}
const playerArr = (name:string) : Player => ({name: name});
const kjm = playerArr("kjm");
kjm.name = "jongmin"  // 오류
```
- 튜플 사용 가능 : 배열이지만 특정 위치에 특정값이 명시된 배열. 항상 정해진 배열 길이만큼 값을 넣어줘야 에러 안남.
```typescript
const player: [string, number, boolean] = ["kjm", 12, false];
const player: [string, number, boolean] = ["kjm", 12];  // 오류남. 선언 값은 무조건 3개.
player[0] = 22;   // 오류남. 배열 0 값은 문자열이어야 함.
```
- `undefined`, `null` 타입도 선언 가능.
- 아무 타입이나 넣을 수 있는 타입 : `any` : typescript 의 보호로부터 탈출하고 싶을 때 쓰는 타입. 가능하면 쓰지 말것.
```typescript
let a : any = "12";
a = 3;    // 가능.
const a : any[] = [1, 2, 3, 4]
const b : any = true;
a + b     //  오류 안 남. any 라서 모든 문법 허용.
```
- `unknown` : 리턴받은 변수 타입을 모를 때. 타입을 무조건 먼저 확인해야 함.
```typescript
let a : unknown;
let b = a + 1;   // 오류남
if (typeof a === 'number'){
  let b = a + 1;   // 체크 로직 안에 있기 때문에 실행됨
}
let b = a.toUpperCase();  // 오류남
if (typeof a=== 'string') {
  let b = a.toUpperCase();  // 사용 가능
}
```
- `void` : 아무것도 리턴하지 않는 함수용. 보통 선언 안해도 됨.
```typescript
function hello() : void { // function hello() { 도 똑같음.
  console.log('x')
}
```
- `never` : 잘 사용 하지 않음. 절대 return 하면 안되는 함수. exception 만 실행 가능.
```typescript
function hello() : never {
  return "X";   // 함수 동작 안함
  throw new Error("xxx");   // 동작함.
}

function hello(name: string | number) {
  if(typeof name === "string") {
    name    // name : string
  } else if (typeof name === "number") {
    name    // name : number
  } else {
    name;     // name : never   <-- 이 분기는 절대 오지 않음.
  }
}
```