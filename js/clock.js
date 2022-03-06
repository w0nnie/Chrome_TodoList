const clock = document.querySelector("h2#clock");


// #5.2 PadStart

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0"); //padStart String형식으로만 사용가능하여 String()으로 변환
    const minutes = String(date.getMinutes()).padStart(2,"0"); //2자리가 아니라면 앞쪽에 + 0
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
//     clock.innerText = `${hours < 10 ? `0${hours}` : hours}:${ //short -if 
//         minutes < 10 ? `0${minutes}` : minutes
//       }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

getClock();  // windows onload 하기위해 호출
setInterval(getClock,1000);  //1초마다 인터벌