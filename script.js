// var saveBtn = document.querySelector(".saveBtn");

var now = moment();

// var timeBlocks = $(".time-block"); // <-- not working for whatever reason so using DOM method
var timeBlocks = document.getElementsByClassName("time-block");
console.log(timeBlocks, "length: ", timeBlocks.length)

// Displays current time
setInterval(function () {
    $('#currentDay').html(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))
}, 0);

// fix -- also check for am pm
for (let i = 0; i < timeBlocks.length; i++) {
    var str = timeBlocks.item(i).innerHTML;
    console.log(str)
    var hourStr = str.replace(/\D/g, "").slice(0, -2);
    console.log(hourStr)
    var hour = parseInt(hourStr);
    console.log(hour)
    if (hour >= 1 && hour <= 5) {
        hour += 12;
    }
    console.log(hour, now.hour())
    console.log(timeBlocks.item(i).nextElementSibling)
    if (hour < now.hour()) {
        timeBlocks.item(i).nextElementSibling.classList.add("past");
        // $(".description").next().addClass("past");
    } else if (hour > now.hour()) {
        timeBlocks.item(i).nextElementSibling.classList.add("future");
        // $(".description").addClass("future");
    } else {
        timeBlocks.item(i).nextElementSibling.classList.add("present");
        // $(".description").addClass("present");
    }
}

function init() {
    // Get stored todos from localStorage
    // var storedEvents = JSON.parse(localStorage.getItem("events"));
  
    // // If events were retrieved from localStorage, update the events array to it
    // if (storedEvents !== null) {
    //   events = storedEvents;
    // }
  
    // // This is a helper function that will render events to the DOM
    renderEvents();
}

// Renders the saved events
function renderEvents() {
    // console.log(localStorage, typeof(localStorage))
    // for (key in localStorage) {
    //     console.log("key: ", key)
    //     var id = "#" + key;
    //     console.log(id, typeof(id))
    //     var text = localStorage.getItem(key);
    //     console.log(text, typeof(text));
    //     $(id).html(); //localStorage.getItem(localStorage(key))
    // }

    // Selects the element by the hour id and updates text from the localStorage
    $("#9").val(localStorage.getItem("9"))
    $("#10").val(localStorage.getItem("10"))
    $("#11").val(localStorage.getItem("11"))
    $("#12").val(localStorage.getItem("12"))
    $("#1").val(localStorage.getItem("1"))
    $("#2").val(localStorage.getItem("2"))
    $("#3").val(localStorage.getItem("3"))
    $("#4").val(localStorage.getItem("4"))
    $("#5").val(localStorage.getItem("5"))
}

// Listens for a click on the save icon, then saves the data to local storage
$("i").on("click", function(event) {
    // event.preventDefault();
  
    // Get the text of the textarea field
    var eventText = $(this).parent().prev().find("textarea").val();
  
    // Get the time of the saved event (the textarea id) and assign it to the key
    // Set the value to the event text
    var key = $(this).parent().prev().find("textarea").attr("id");
    var value = eventText;

    // Store time and event in localStorage
    localStorage.setItem(key, value);
  
    // Store updated todos in localStorage, re-render the list
    renderEvents();
});

init();