var saveBtn = document.querySelector(".saveBtn");

var now = moment();
var events = [];
// console.log("events: ", events);

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
    // var storedEvents = JSON.parse(localStorage.getItem("events"));
  
    // // If events were retrieved from localStorage, update the events array to it
    // if (storedEvents !== null) {
    //   events = storedEvents;
    // }
  
    // // This is a helper function that will render events to the DOM
    renderEvents();
}

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
    console.log($("#9").val())
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
// $("#9").val(localStorage.getItem("9"))
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