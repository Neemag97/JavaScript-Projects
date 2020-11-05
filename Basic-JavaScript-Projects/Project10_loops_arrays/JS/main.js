//For Loop
var text = "";
var i;
for (i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
document.getElementById("Loop").innerHTML = text;

//For Loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
  for (Y = 0; Y < Instruments.length; Y++) {
    content += Instruments[Y] + "<br>";
  }
  document.getElementById("List_of_Instruments").innerHTML = Content;
}

//while loop
var Digit = "";
var x = 1;
while (x < 11) {
  Digit += "<br>" + x;
  x++;
}
document.getElementById("Counting_To_Ten").innerHTML = text;


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
    const Musical_Instrument = {type:"guiter", brand:"Fender", color:"black"};
    Musical_Instrument.color= "blue";  //changed the “black” value for the color property to “blue”.
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML= "The cost of the "  +  Musical_Instrument.type + "was" + Musical_Instrument.price;
}

//The let keyword
var x = 82;
document.write(x);
{
  let x = 33;
  document.write("<br>" + x);
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
document.getElementById("Car_Object").innerHTML = car.description();
//In the above code, the properties are: make, model, year and color. The method is the description function – which should return: The car is a 2021 red Dodge Viper

