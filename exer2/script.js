"use strict"

document.getElementById("button").onclick = function() {
    myFunction();
    readarray();
}

function myFunction() {
    document.getElementById("smallbox").classList.toggle("show");
}

function readarray() {
    var array = [prompt("Please enter your number", "0")];
    
    for (var i = 0; i < array.length; i++) {
        array[i] = document.getElementById(textinput);
    }
}

function showarray(array) {

}
function sortarray(array) {


}