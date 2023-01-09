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

## 3 Functions
- Call Signature : VS Code 에서 마우스 올렸을 때 보이는 정보.
```typescript
type Add = (a: number, b:number) => number; // 미리 함수의 타입 정보를 다 정의
const add:Add = (a, b) => a+b;
```
- Overloading : Java 에서 오버로드 와 비슷함. 같은 함수명에 다수의 파라메터 형식 부여.
```typescript
type Add = {
  (a: number, b: number) : number
  (a: number, b: string) : number
}
// 두가지 형식으로 호출 가능.
const add: Add = (a, b) => {
  if(typeof b ==="string") return a
  else return a + b
}

//위와 같은 예제는 잘 사용 안됨. 실제는 다음과 같이.
type Config = {
  path: string,
  state: object
}
type Push = {
  (path: string ): void
  (config: Config): void
}
const push: Push = (config) => {
  if(typeof config === 'string') console.log(config);   //config 는 String
  else { console.log(config.paht)}    // config 는 ojb
}
// Next.js 예 : Router.psh() 에 string, object 다 사용 가능.
Router.push(
  {path: "/home", state : 1}
)
Router.push("/home")

// 파라메터가 2개 또는 3개 일 때 파라메터들의 합을 리턴.
type Add = {
  (a: number, b: number) : number
  (a: number, b: number, c: number) : number
}
const add: Add = (a, b, c?: number) => {
  if (c) return a+b+c;
  else return a+b;
}
```
- polymorphism
```typescript
// 일반적인 오버로딩 활용
type SuperPrint = {
  (arr: number[]): void
  (arr: boolean[]): void

}
const superPrint: SuperPrint = (arr) => {
  arr.forEach(i => console.log(i))
}
superPrint([1, 2, 3, 4]);
superPrint([true, false]);
// 이런식으로 다 정의하다가는 끝이 없음.

// 제네릭(placeholder for type) 타입으로 받을것. TS 가 추론해서 선언해줌. <Generic 이름>
type SuperPrint = {
  <MyGeneric>(arr: TypePlaceholder[]): void   // 이렇게 하면 모든 타입 다 받음.
}
const superPrint: SuperPrint = (arr) => {
  arr.forEach(i => console.log(i))
}
// 각각 함수명에 마우스 커서 대서 확인할것.
const a = superPrint([1, 2, 3, 4]);
const b = superPrint([true, false]);
const d = superPrint(["a", "b", 1, true ]);   // const d: sting | number | boolean

// 값 리턴하려면 다음과 같이
type SuperPrint = {
  <MyGeneric>(arr: TypePlaceholder[]): TypePlaceholder   // 이렇게 하면 모든 타입 다 받음.
}
const superPrint: SuperPrint = (arr) => {
  return arr[0];
}
// 보통 간단하게 다음처럼 선언함 
type SuperPrint = <T>(arr: T[]) => T
type SuperPrintt = <T, M> (a: T[], b: M ) => T

function superPrint<T>(a: T[]){
  return a[0];
}
```
- 다양한 활용 방법
```typescript
type Player<E> = {
    name: string
    extraInfo : E
}
type KJM = Player<{favFood: string}>
const kjm : KJM = {
    name : "kjm",
    extraInfo: { favFood: "meet"}
}
// 타입 확장 : 타입 만들고 그 타입을 또 제너릭 안에 넣고 가능. 큰 타입 선언 후 재사용.
```