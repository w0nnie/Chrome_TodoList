const a = 5;
const b = "2";
let myName = "jinwon";

//let, const의 차이 
//const 상수 선언해준 값을 변경할 수 없다.
//const 값을 선언하고 절대 바꾸지 않아야 할때 사용하면 될듯
console.log(a + 2);
console.log(a+b);
console.log("hello "+ myName);

//object와 function의 매겨변수 보내기
const player = {
    name:"jinwon",
    sayHello: function (otherPersonName){
        console.log("Hello " + otherPersonName + " nice to meet u!");
    }
};

player.sayHello("jieun");
player.sayHello("haha");