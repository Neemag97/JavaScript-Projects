function my_Function() {
    typeof "" + "<br>" +
    typeof "John" + "<br>" + 
    typeof "John Doe" + "<br>" +
    typeof 0 + "<br>" +
    typeof (3.14);
    document.write("typeof");
}

    var x = 6;
    var y = 5;
    document.write (x + y);

function infinity_Function() {  //infinity
    document.getElementById("demo").innerHTML = 1.7976931348623157E+10308 + "<br>" +  -1.7976931348623157E+10308;
}

console.log(2 + 2)

var x=10;
var y=2;
document.write(y + x);

document.write(10 < 2)

document.write("10" + 2);

document.write(10 == 10);

x= 9;
y=9;
document.write(x === y);

x = 82;
y = "82";
document.write(x === y);

A = "Magnus";
B = "Magnus";
document.write(A === B);

document.write(5 > 2 && 10 > 4); // AND written: && = true because five is greater than two, and ten is greater than four
document.write(5 > 8 && 10 > 4); // AND written: && = false because five is less than eight, and ten is greater than four

document.write(5 > 10 || 10 > 4); //OR written: || “true” because, while 5 is not greater than 10, 10 is greater than 4
document.write(5 > 10 || 10 > 20); //OR written: || “fase” because, while 5 is not greater than 10, 10 is not greater than 20

function not_Fuunction(){
    document.getElementById("not").innerHTML= !(20 > 10); //Not operator "False" because 20 is truelly greater than 10.
}

function not_Fuunction(){
    document.getElementById("not").innerHTML= !(5 > 10); //Not operator "False" because 5 is truelly less than 10.
}