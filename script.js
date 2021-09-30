var now = moment();
var events = [];

var timeBlocks = document.getElementsByClassName("time-block");
console.log(timeBlocks)

// Displays current time
setInterval(function () {
    $('#currentDay').html(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))
}, 0);

// fix -- also check for am pm
for (let i = 0; i < timeBlocks.length; i++) {
    var str = timeBlocks.item(i).innerHTML;
    var hourStr = str.replace(/\D/g, "").slice(0, -2);
    var hour = parseInt(hourStr);
    console.log(hour, now.hour())
    if (hour < 3) {
        $(".description").addClass("past");
    } else if (hour > 3) {
        $(".description").addClass("future");
    } else {
        $(".description").addClass("present");
    }
}

function init() {
    // Get stored todos from localStorage
    var storedEvents = JSON.parse(localStorage.getItem("events"));
  
    // If events were retrieved from localStorage, update the events array to it
    if (storedEvents !== null) {
      events = storedEvents;
    }
  
    // This is a helper function that will render events to the DOM
    renderEvents();
  }

  function renderEvents() {
      // TODO:
  }