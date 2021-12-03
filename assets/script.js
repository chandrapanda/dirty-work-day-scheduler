console.log("Oh hey there");
//Global variables
var today = $("#currentDay");
var localStoredEvents = localStorage.getItem("userEvents");
var userEvents;
//If no events are present in local storage, sets userEvents to empty object
if (!localStoredEvents) {
    userEvents = {};
} else {
    userEvents = JSON.parse(localStoredEvents);
}

//Displays the current date on the page
today.text(moment().format('MMMM Do, YYYY'));

generateTimes();

//Saves user input in calendar on reload
function saveEvent(event) {
    console.log("Saved!");
    //Text saves to page on reload and targets specific HOUR of calendar
    var clickedButton = $(event.target);
    var hour = clickedButton.attr("id");
    var textValue = clickedButton.parent().siblings("textarea").val();
    userEvents[hour] = textValue;
    localStorage.setItem("userEvents", JSON.stringify(userEvents));
}

//Generates single row of schedule on page
function generateRow(rowIndex, currentHour) {

    var row = $("<div></div>");
    row.addClass("row");

    if (rowIndex === currentHour) {
        row.addClass("present");
    } else if (rowIndex > currentHour) {
        row.addClass("future");
    } else {
        row.addClass("past");
    }

    var form = $("<textarea></textarea");
    form.addClass("col-9");
    //References any given text content that has been saved to a row
    form.text(userEvents[rowIndex]);

    var time = $("<div></div>");
    time.addClass("hour col-2");

    //Styles SAVE button icon within container
    var buttonContainer = $("<div></div>");
    buttonContainer.addClass("saveBtn col-1");
    var saveIcon = $("<i></i>");
    buttonContainer.append(saveIcon);
    saveIcon.addClass("fas fa-save");
    saveIcon.attr("id", rowIndex);

    //Appends ROW, TEXTAREA, and HOUR divs to TIME-BLOCK div
    var timeBlock = $("#time-block");
    timeBlock.append(row);
    row.append(time);
    row.append(form);
    row.append(buttonContainer);
    //Adds hour to HOUR div
    time.text(`${rowIndex}:00`);
   
    //Adds function to 'save' button
    saveIcon.on("click", saveEvent);
}

//Generates work times from 0900 to 1700
function generateTimes() {

    //Enables rows to be created based on whether they are in the past, present, or future using MOMENT()
    var currentHour = parseInt(moment().format('H'));
    
    for (let index = 9; index < 18;  index++) {
        generateRow(index, currentHour);
    }
    
}
