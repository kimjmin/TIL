// 2.2 variables
const c1 = "aaa"    // 값 변경 불가능
let l1 = "ddd"      // 값 변경 가능.

// 2.4 booleans
const b1 = true;
const b2 = false;
const b3 = null;        // 값 없음
const b4 = undefined;   // 정의되지 않음


// 2.5 Array
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(daysOfWeek);
//  이렇게도 가능.
const nonsence = [1, 2, true, "text", null, undefined];
// array에 아이템 추가
daysOfWeek.push("sun");
console.log(daysOfWeek);

// 2.6 object
const player = {
    name: "jong", points: 100, fat: false
}
console.log(player.name);
console.log(player);
console.log(player["name"]);    //이렇게도 가능

player.fat = true;      // const 로 선언했어도 프로퍼트 값은 변경 가능.
console.log(player);

player.lastname = "potato"; // 새 프로퍼티 추가 가능
console.log(player);

// 2.7, 2.8 functions
function sayHello(name, age) {
    if (age) {
        console.log("hello, I am " + name + " and I'm " + age);
    } else if (age === null) {
        console.log("hello, I am " + name + " and I am nothing");
    } else {
        console.log("hello, I am " + name);
    }
}
sayHello("jongmin", 41);
sayHello("Min", true);
sayHello("Kim", null);
sayHello("Jong");

const player2 = {
    name: "Jongmin",
    sayHi: function (playerName) {
        console.log("Hi, I am " + playerName);
    }
}

player2.sayHi("player");

// recap
console.log(console);
console.log(3 ** 3);  // ** 는 power (제곱) 연산

// 2.11 returns
// variable 에 값 넣고 나서 브라우저 console 에서 variable 이름 입력하고 엔터치면 값 나옴.

//  2.13 변수 타입 보기
console.log(typeof "15", typeof parseInt("15"));
// parseInt("text") 인 경우 NaN 반환
const age = parseInt( prompt("how old are you?") );
// console.log(age);
// console.log(isNaN(age));
if(isNaN(age)){
    console.log("please write number")
} else if(parseInt(age) < 18){
    console.log(`You are ${age} years old. You are too young`);
} else {
    console.log(`You are ${age} years old. You can drink`);
}
