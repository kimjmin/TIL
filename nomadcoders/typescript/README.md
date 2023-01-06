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