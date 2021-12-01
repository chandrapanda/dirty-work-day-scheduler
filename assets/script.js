console.log("Oh hey there");
//Global variables
var today = document.getElementById("currentDay");
var row = document.getElementsByClassName("row");
var saveButton = document.getElementById("saveBtn")
var userInput = localStorage.getItem("");

//Displays the current date on the page
today.textContent += moment().format('MMMM Do, YYYY');

//Adds function to 'save' button
saveButton.addEventListener("click", saveEvent);

//
function saveEvent() {
    console.log("Saved!");
    localStorage.setItem("");
}