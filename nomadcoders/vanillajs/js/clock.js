const clockVal = document.querySelector("h2#clock");

function getClock(){
  const date = new Date();
  const yearVal = date.getFullYear();
  const monthVal = date.getMonth()+1;
  const dayVal = date.getDate();
  const hourVal = String(date.getHours()).padStart(2,"0");
  const minVal = String(date.getMinutes()).padStart(2,"0");
  const secVal = String(date.getSeconds()).padStart(2,"0");

  clockVal.innerText = `${yearVal}년 ${monthVal}월 ${dayVal}일 ${hourVal}:${minVal}:${secVal}`
}

getClock();
setInterval(getClock, 1000);