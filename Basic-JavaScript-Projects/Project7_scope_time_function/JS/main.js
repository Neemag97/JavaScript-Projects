var x = 10;
function Add_numbers_1() {
    document.write(20 + x + "<br>");
}
function Add_numbers_2() {
    document.write(x + 100);
}
Add_numbers_1();
Add_numbers_2();
//The code above would return “30” and “110.” The variable X was assigned the value 10 outside of our function, but we still accessed it

function Add_numbers_1() {
    var x = 10;
    document.write(20 + x + "<br>");
}
function Add_numbers_2() {
    document.write(x + 100);
}
Add_numbers_1();
Add_numbers_2();
//In the code above, this time, the code would only return “30” because the variable was local – meaning it was written within the function Add_numbers_1 and couldn’t be accessed outside of it.

function Add_numbers_1() {
    var x = 10;
    console.log(15 + x);
}
function Add_numbers_2() {
    console.log(x + 100);
}
Add_numbers_1();
Add_numbers_2();
//If you executed the code above in the browser, no result will be shown. But if you open the console, you’ll see the error “X is not defined.”


function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greetings").innerHTML= "How are you today?";
    }
}
//As a note: The Date().getHours() method returns the hour in the specified date according to the local time, and the hours are listed as integers between 0 and 23. For example: 18 is equal to 6:00 p.m., 12 is noon, etc.

function get_Date() {
    if (new Date().getHours() > 18) {
        document.getElementById("Night_Greetings").innerHTML= "Have a Wonderful night!";
    }
}

//ELSE STATEMENTS
function Age_Function() {
    Age = document.getElementById("Age").nodeValue;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML= Vote;
}

//ELSE IF STATEMENTS. This program pulls the time from your computer and tells you what time of day it is!
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML= Reply;
}