var x = 7;
var y = 5;
var z = x +y;
console.log(z);
var A = "hello ";
var B = "World!";
var C = A+B;
console.log(C);

// this is s js example
/*kjdhfdkjfdh
kjfhdsjkfh
kdsjfhdskjfh*/

function myFirstFunction(x1, x2) {
    var x3 = x1 +x2 ;
    // window.alert(x3) 
    console.log(x3);
}

myFirstFunction(x,y);
myFirstFunction(A,B);


var now = new Date();
console.log(now);

var currentYear = now.getFullYear();
console.log(currentYear);

document.getElementById("footer_copy").innerHTML= "Monomuse&copy;" + " " + currentYear;