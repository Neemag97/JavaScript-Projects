//For Loop
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
document.getElementById("wile_Loop").innerHTML = text;


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
function constant_Function() {
    const Musical_Instrument = {type: "guiter", brand:"Fender", color:"black"};
    Musical_Instrument.color= "blue";  //changed the “black” value for the color property to “blue”.
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML= "The cost of the "  +  Musical_Instrument.type + Musical_Instrument.price;
}

//The let keyword
var x = 82;
document.write(x);
{
  let x = 33;
  document.write("<br>" = x);
}
document.write("<br>" + x);

var x = 82;
document.write(x);
{
  var x =33;
  document.write("<br>" + x);
}
document.write("<br>" + x);

//OBJECTS
let car = {
  make = "Dodge",
  model = "Viper",
  year = "2021",
  color ="red",
  description : function() {
    return "The car is a "  +  this.year  +  this.color  +  this.make  +  this.model;
  }
};
document.getElementById("Car-Object")== captureEvents.description();
//In the above code, the properties are: make, model, year and color. The method is the description function – which should return: The car is a 2021 red Dodge Viper

