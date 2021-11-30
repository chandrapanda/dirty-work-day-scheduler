console.log("Oh hey there");

var today = document.getElementById("currentDay");

today.textContent += moment().format('MMMM Do, YYYY');

document.getElementById("saveBtn").addEventListener("click", saveEvent)

function saveEvent {
    
}