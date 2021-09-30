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
    var storedEvents = JSON.parse(localStorage.getItem("events"));
  
    // If events were retrieved from localStorage, update the events array to it
    if (storedEvents !== null) {
      events = storedEvents;
    }
  
    // This is a helper function that will render events to the DOM
    renderEvents();
}

function storeEvents() {
    localStorage.setItem("events", JSON.stringify(events));
}

function renderEvents() {
    // TODO:
    for (let i = 0; i < localStorage.length; i++) {
        var id = toString(i);
        $(id).html(localStorage.getItem(i));
    }
    
}

//saveBtn.addEventListener("click", function(event) {
//$( "p" ).on( "click", function() {
//   alert( $( this ).text() );
// });
$("i").on("click", function(event) {
    // event.preventDefault();
  
    var eventText = $(this).parent().prev().find("textarea").val();
    // console.log($(this).parent().prev().find("textarea").val())
  
    // // Return from function early if submitted todoText is blank
    // if (todoText === "") {
    //   return;
    // }
  
    // Add new todoText to todos array, clear the input
    var key = $(this).parent().prev().find("textarea").attr("id");
    var value = eventText;
    var myFunEvent = {}
    myFunEvent[key] = value;

    // console.log(key, typeof(key))
    events.push(myFunEvent);
    console.log(events)
  
    // Store updated todos in localStorage, re-render the list
    // storeEvents();
    // renderEvents();
  });