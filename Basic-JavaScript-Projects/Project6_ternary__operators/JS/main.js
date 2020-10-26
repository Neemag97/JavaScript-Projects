
//TERNARY OPERATORS
document.write(Bigger = (5>1) ? "Left number is bigger":"Right numberis bigger");  //In this code, we said that if it’s true that 5 is bigger than 1, display “Left number is bigger.”

function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById('Ride').innerHTML= Can_ride + "to ride.";
}

//OBJECT-ORIENTED PROGRAMMING

function Vehical(Make, Model, Year, Color) {   //The function “Vehicle()” in our code is an object constructor.
    this.Vehical_Make= Make; 
    this.Vehical_Model= Model;
    this.Vehical_Year= Year;
    this.Vehical_Color= Color;
}
var Jack= new Vehical("Dodge", "Viper", "Red");
var Emily= new Vehical("Jeep", "Trail Hawk", 2020, "White");
var Erik= new Vehical("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_constructors").innerHTML= "Erik drives a " + Erik.Vehical_Color + "Colored " + Erik.Vehical_Model + " manufactured in " + Erik.Vehical_Year;
}

function Wolf(Breed, Age, Color) {
    this.Wolf_Breed= Breed;
    this.Wolf_Age= Age;
    this.Wolf_cOlor= Color;
}
var Grace= new Wolf("Lupus", "3_years_old", "Gray");
var Glory= new Wolf("Rufus", "4_years_old", "Red");
var Shedy= new Wolf("Lycaon", "2_years_old", "Gray");
function mynewFunction() {
    document.getElementById("New_and_This").innerHTML= "Shedy pets a"  +  "Gray"  +   "Lycaon"  +  "Who is "  +  "3 years old" 
}

function count_Function() {
    document.getElementById("Nested_Function").innerHTML= Counnt();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}     //the Plus_one() function was the nested function.
        Plus_one();    
        return Starting_point;
    }
}
