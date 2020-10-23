function my_Function() {
    typeof "" + "<br>" +
    typeof "John" + "<br>" + 
    typeof "John Doe" + "<br>" +
    typeof 0 + "<br>" +
    typeof (3.14);
    document.write("typeof");
}

function my__Function() {
    var x = 6;
    var y = 5;
    document.write (x + y);
}

function myFunction() {
    var res = "";
    res = res + isNaN(0 / 0) + ": 0 / 0<br>";
    res = res + isNaN(null) + ": null<br>";
    document.getElementById("infinity").innerHTML = res; 
}

function infinity_Function() {  
    document.write (1.7976931348623157E+10308 + "<br>" +  -1.7976931348623157E+10308);
  }

  var x=10;
  var y=2;
  document.write(y + x);
