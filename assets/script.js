console.log("Oh hey there");
//Global variables
var today = document.getElementById("currentDay");
var localStoredEvents = localStorage.getItem("userEvents");

//If no events are present in local storage, sets userEvents to empty object
if (!localStoredEvents) {
    userEvents = {};
} else {
    userEvents = JSON.parse(localStoredEvents);
}

//Displays the current date on the page
today.textContent += moment().format('MMMM Do, YYYY');
generateTimes();

//Saves user input in calendar on reload
function saveEvent() {
    console.log("Saved!");
    //TODO: Make sure text saves to page on reload and targets specific HOUR of calendar
    var userEvents =  
    localStorage.setItem("userEvents", JSON.stringify(userEvents));
    
}

function getSavedEvent() {
    if (!localStorage.getItem("userEvents")) {
        return "";
    }
    return localStorage.getItem("userEvents");
}

//Generates single row of schedule on page
function generateRow(rowIndex, currentHour) {

    var row = document.createElement("div");
    row.classList.add("row");
    // console.log(rowIndex); 
    // console.log(currentHour);
    if (rowIndex === currentHour) {
        row.classList.add("present");
    } else if (rowIndex > currentHour) {
        row.classList.add("future");
    } else {
        row.classList.add("past");
    }

    
    var form = document.createElement("textarea");
    form.setAttribute("id", "textArea"+rowIndex)
    
    let getTextAreaValue = localStorage.getItem("textarea"+rowIndex);
    form.innerHTML = getTextAreaValue;

    var time = document.createElement("div");
    time.classList.add("hour");

    var saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";
    saveBtn.classList.add("saveBtn");
    saveBtn.setAttribute("id", 'saveButton')

    //Appends ROW, TEXTAREA, and HOUR divs to TIME-BLOCK div
    var timeBlock = document.getElementById("time-block");
    timeBlock.appendChild(row);
    row.appendChild(time);
    row.appendChild(form);
    row.appendChild(saveBtn);

    //Adds hour to HOUR div
    time.textContent = `${rowIndex}:00`;
   
    //Adds function to 'save' button
    saveBtn.addEventListener("click", saveEvent);
}

//Generates work times from 0900 to 1700
function generateTimes() {

    //Enables rows to be created based on whether they are in the past, present, or future using MOMENT()
    var currentHour = parseInt(moment().format('H'));
    
    for (let index = 9; index < 18;  index++) {
        generateRow(index, currentHour);
    }
    
}
