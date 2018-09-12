"use strict"

function myFunction() {
    var rangemax = prompt("Please enter the n for range (1 - n)", "0");
    var randomNumber = Math.floor(Math.random() * Math.floor(rangemax));
    var number = 0;
    while (randomNumber != number) {
        number = prompt("Please enter your number", "0");
        if (number > randomNumber) {
            alert("Your number is too big");
        }
        if (number < randomNumber) {
            alert("Your number is too small");
        }
    }
            document.getElementById("demo").innerHTML =
            "Your number: " + number + " is correct";
}