var x = 7;
var y = 5;

var A =  "hello "
var B = "World!"

function myFirstFunction(x1,x2) {
    var x3 = x1 + x2;
    console.log(x3);
}

myFirstFunction(x,y);
myFirstFunction(A,B);

var now = new Date();
console.log(now); 
var year = now.getFullYear();

document.getElementById("footer_copy").innerHTML = "Monomuse&copy " + year;