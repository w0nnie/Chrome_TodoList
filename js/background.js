const images = [ "0.jpeg", "1.jpeg", "2.jpeg" ];
const chosenImage =images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

// #6.1 Background

bgImage.src = `img/${chosenImage}`; // string `(백틱)

document.body.appendChild(bgImage); //html에 추가 특정 위치에 넣고 싶다면 document.body.insertbefore()

