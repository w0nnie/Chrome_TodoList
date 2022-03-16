const clockTitle = document.querySelector(".js-clock");

function getClock() {
  const setDate = new Date("2022-12-25T00:00:00");
  const date = new Date();
  const untillTime = setDate.getTime() - date.getTime();
  const day =
    String(Math.floor(untillTime / (1000 * 60 * 60 * 24))).padStart(2, "0") +
    "d";
  const hours =
    String(
      Math.floor((untillTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).padStart(2, "0") + "h";
  const min =
    String(Math.floor((untillTime % (1000 * 60 * 60)) / (1000 * 60))).padStart(
      2,
      "0"
    ) + "m";
  const seconds =
    String(Math.floor((untillTime % (1000 * 60)) / 1000)).padStart(2, "0") +
    "s";
  clockTitle.innerText = `${day} ${hours} ${min} ${seconds}`;
}

getClock(); // windows onload 하기위해 호출
setInterval(getClock, 1000); //1초마다 인터벌
