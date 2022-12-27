// 브라우저 console 에서 입력해서 도큐먼트 객체 전체 속성 볼 수 있음.
console.dir(document);
// 브라우저 콘솔에서 입력해서 타이틀 값 볼 수 있음.
document.title
// document.title = "Hi"

// id 가져오기
// const title = document.getElementById("title");
const title = document.querySelector("div.hell:first-child h1");
console.dir(title);
// 태그 안에 있는 글씨 바꾸기.
title.innerText = "Got You";
console.log(title.id);
console.log(title.className);

const hellos = document.getElementsByClassName("hello");
console.log(hellos);

const h1s = document.getElementsByTagName("h1");
console.log(h1s);

// 여러개가 있어도 맨 처음에 찾은것만 가져옴. css selector 형식으로 찾음
const queryVal = document.querySelector(".hiyo h1");
console.log(queryVal.innerHTML);
const queryValId = document.querySelector("#tt h1 :first-child");
console.log(queryValId.innerHTML);

// 여러개 다 가져옴
const queryAllVal = document.querySelectorAll("div h1");
console.log(queryAllVal);
// 3.3 elemet 보고 싶으면 console.dir 하면 사용 가능한 속성 다 볼 수 있음.
title.style.color = "red";

//event 를 위한 함수
function handleTitleClick(){
    title.style.color = "blue";
    console.log("Title was clicked!!");
}
// 이벤트 리스너 등록. (이벤트 종류, function) function 뒤에 () 들어가지 않음에 주의.
title.addEventListener("click", handleTitleClick);

// 구글에서 html heading element mdn 검색 (moszilla dev network)
// console.dir 에서 on{이벤트명} 으로 시작하는것은 {이벤트명} 으로 등록 가능.
function handleMouseEnter(){
    title.innerText = "Mouse is Here";
}
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", function handleMouseLeave(){
    title.innerText = "Mouse is gone";
});

// 3.5 window event https://developer.mozilla.org/en-US/docs/Web/API/Window
// addEventeListener 대신 on{이벤트명} 을 써도 됨.
title.onclick = handleTitleClick;
// addEventListener 는 나중에 removeEventListener 로 제거 가능.

// window 사이즈 변경
function handleWindowResize(){
    // document 에서 body, head 등만 가져올 수 있음. div 등은 안됨.
    document.body.style.backgroundColor = "tomato";
}
window.addEventListener("resize", handleWindowResize);
// 클립보드 copy 액선
function handleWindowCopy() {
    alert("copied");
}
window.addEventListener("copy", handleWindowCopy);
// 인터넷 on off 체크
function handleWindowOffline(){
    alert("offline!");
}
window.addEventListener("offline", handleWindowOffline);

// 3.6 css 접근. 컬러 다르면 바꾸기
grabs = document.querySelector("h1.hello");
function handleTitleClick2(){
    const currentColor = grabs.style.color;
    let newColor;
    if(currentColor === "blue"){
        newColor = "red";
    } else {
        newColor = "blue";
    }
    grabs.style.color = newColor;
}
grabs.addEventListener("click", handleTitleClick2);

// 3.7. acitve 는 style.css 에 정의되어 있음.
const hells = document.querySelector("h1.hellos");
/** 이렇게 하는건 그닥 좋지 않음
function handleHellosClick(){
    if(hells.className === "active hellos"){
        hells.className = "hellos";
    } else {
        hells.className = "active hellos";
    }
}
*/
function handleHellosClick(){
    const clickedClass = "active";
    if (hells.classList.contains(clickedClass)){
        hells.classList.remove(clickedClass);
    } else {
        hells.classList.add(clickedClass);
    }
}
hells.addEventListener("click", handleHellosClick);

// 3.8 토글을 이용해서 더 쉽게. 비슷한 기능이 많으니 다양하게 검색 해 볼것.
const tgl = document.querySelector(".tgl");
function toggleBtnClick(){
    const tglClicked = "active";
    tgl.classList.toggle(tglClicked);
}
tgl.addEventListener("click", toggleBtnClick);