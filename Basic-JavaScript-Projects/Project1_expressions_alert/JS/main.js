window.alert("Hello, World!"); //popsup a message on the window
document.write('Hello, World!');

var A = "This is a string";
document.write(A);

window.alert("variable");
var x = 5;
var y = 6;
var z = x + y;
document.write(z);


var x = "They are the so-called \"Pony\" from the north.";
document.getElementById(x);

function concatenate_Function(){
    var str1 = "Start_by_doing_what_is_necessary,";
    var str2 = "then_do_what_is_possible,";
    var str3 = "suddenly_you_are_doing_the_impossible";
    var str4 = "-Francis_of_Assisi";
    var res = str1.concat(str2, str3);
    document.getElementById("concatenate").innerHTML = res;
}

var A = "Concatenated" ;
var B = "string";
var C = A + B
document.write(C);

var person = "John Doe", carName = "Volvo", price = 200;
document.getElementById("test").innerHTML= carName;

var price = "I have $2000"
var price = price.fontcolor("purple")
document.write(price);

document.write(3+3);

function myFunction() {
    var str = "Hello World!";
    var result = str.fontcolor("green");
    document.getElementById("color").innerHTML = result;
}