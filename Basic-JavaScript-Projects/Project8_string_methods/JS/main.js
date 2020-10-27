//CONCAT() METHOD: The concat() method concatenates (connects) two or more strings

function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenated").innerHTMl= whole_Sentence;
}

//SLICE() METHOD 
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dul boy.";
    var Section = "Sentence.slice(27,33)";    //The numbers indicate which characters in your string will be cut out and displayed. This code would display “Johnny”.
    document.getElementById("Slice").innerHTML= Section;
}


//Number String
function string_Method() {
    var x = 182;
    document.getElementById("Numbers_to_string").innerHTML= x.toString();   //“toString()” method returns a number as a string
}

//TOPRECISION() METHOD: The toPrecision() method formats a number to a specified length.
function precision_Method() {
    var x = 12938.3012987376112;
    document.getElementById("Precision").innerHTML= x.toPrecision(10);
}