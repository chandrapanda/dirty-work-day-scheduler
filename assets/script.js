console.log("Oh hey there");
//Global variables
var today = document.getElementById("currentDay");
var userInput = localStorage.getItem("");

//Displays the current date on the page
today.textContent += moment().format('MMMM Do, YYYY');
generateTimes();

//Saves user input in calendar on reload
function saveEvent() {
    console.log("Saved!");
    localStorage.setItem("");
}

//Generates single row of schedule on page
function generateRow(rowIndex) {
    
    //Creates ROW div
    var row = document.createElement("div");
    row.classList.add("row");

    //Creates TEXTAREA 
    var form = document.createElement("textarea");

    //Creates HOUR div
    var time = document.createElement("div");
    time.classList.add("hour");

    //Creates BUTTON 
    var saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";
    saveBtn.classList.add("saveBtn");

    //Appends ROW, TEXTAREA, and HOUR divs to TIME-BLOCK div
    var timeBlock = document.getElementById("time-block");
    timeBlock.appendChild(row);
    row.appendChild(time);
    row.appendChild(form);
    row.appendChild(saveBtn);
    //Adds hour to HOUR div
    time.textContent = rowIndex;

    //Adds function to 'save' button
    saveBtn.addEventListener("click", saveEvent);
}

//Generates work times from 0900 to 1700
function generateTimes() {
    for (let index = 9; index < 18;  index++) {
        generateRow(index);
    }
}

