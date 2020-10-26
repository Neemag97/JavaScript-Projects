//Loop
var text = "";
var i;
for (i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
document.getElementById("Loop").innerHTML = text;

//while loop
var text = "";
var i = 0;
while (i < 10) {
  text += "<br>The number is " + i;
  i++;
}
document.getElementById("Loop").innerHTML = text;


//ARRAY
var cars = ["Saab", "Volvo", "BMW"];
var Content= "";
function array_Function() {
    for (x = 0; x < cars.length; x++) {
        content += cars[x] + "<br>";
    } 
    document.getElementById("Array").innerHTML = cars[0];
}


//CONST KEYWORD
function constant_function() {
    const Musical_Instrument = {type: "guiter", brand:"Fender", color:"black"};
    Musical_Instrument.color= "blue";  //changed the “black” value for the color property to “blue”.
    Musical_Instrument.price = "$875";
    Musical_Instrument.weight = "10lb"
    document.getElementById("Constant").innerHTML= "The cost of the "  +  Musical_Instrument.type + Musical_Instrument.price;
}