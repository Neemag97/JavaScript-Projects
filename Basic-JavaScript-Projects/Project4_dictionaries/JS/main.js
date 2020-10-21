function my_Dictionary() {
    var Animal={
        Species: "Dog",
        Color: "black",
        Breed: "Labrador"
        Age: 5,
        Sound: "Bark"
    };
  document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

function my_Dictionary() {
    var Animal={
        Species: "Dog",
        Color: "black",
        Breed: "Labrador"
        Age: 5,
        Sound: "Bark"
    };
    delete Animal.Sound; //Code delete statement that removes the Animal Sound
  document.getElementById("Dictionary").innerHTML = Animal.Sound;
}