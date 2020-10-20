function myFunction() {
    document.getElementById("Math").innerHTML = Math.abs(27.5);
  }

function substraction_Function() {
    var substraction = 5-2
    document.getElementById("Math").innerHTML = "5-2" + substraction;
} 

function multiplication () {
    var simple_Math = 5*2
    document.getElementById("Math").innerHTML = "5*2" + simple_Math;
} 

function division () {
    var simple_Math = 48/6;
    document.getElementById("Math").innerHTML="48/6" + simple_Math
}

function more_math () {
    var simple_Math = (5+2)*10/2-5;
    document.getElementById("Math").innerHTML = "5 plus 2, multiplied by 10, divided in half and then substracted by 5 equals " + simple_Math;
} 

function modulus_Operator () {
    var simple_Math = 25 % 6
    document.getElementById("Math").innerHTML = "When tou divide 25 by 6 you have a reminder of: " + simple_Math;
}

function negation_operator() {
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}

var x=5;
x++;
document.write(x);

var x=5.5;
x--;
document.write(x);

window.alert(Math.random() );