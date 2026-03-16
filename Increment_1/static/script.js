
var x=5;
var y=7;
var c=x+y;
console.log(c)

var A = "Hello ";
var B = "world!";
var C = A+B;
console.log(C);

function sumnPrint(x1,x2) {
    let c = x1+x2;
    console.log(c);
}

sumnPrint(x,y);
sumnPrint(A,B);

if (C.length < c) {
    console.log(C);
    if (C.length < c) {
        console.log(z);      
    }
} else {  
    console.log("good job!");  
}

var L1 = ["Watermelon","Pineapple","Pear","Banana"];
var L2 = ["Apple","Banana","Kiwi","Orange"];

function FindTheBanana(array) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element == "Banana") {
            console.log("got it " + index);
        }
        
    }
}

FindTheBanana(L1);
FindTheBanana(L2);

L1.forEach((element, index) => {
    if (element === "Banana") {
        console.log("Found it at index: " + index);
    }
});

var now = new Date();
console.log(now);
