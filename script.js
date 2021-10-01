//TODO: instead of hard coding the HTML, add the divs and its classes with jquery

// Get the current time
var now = moment();

// var timeBlocks = $(".time-block"); // <-- not working for whatever reason so using DOM method
var timeBlocks = document.getElementsByClassName("time-block");

// Displays current time
setInterval(function () {
    $('#currentDay').html(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))
}, 0);

// Updates the color of each row depending on current time
for (let i = 0; i < timeBlocks.length; i++) {
    var str = timeBlocks.item(i).innerHTML; // Get the text of the time block
    var hourStr = str.replace(/\D/g, "").slice(0, -2); // Remove any characters that isn't a number, then remove the last two zeroes
    var hour = parseInt(hourStr); // Convert to an integer

    // For easier comparison, adding 12 accounts for AM and PM
    if (hour >= 1 && hour <= 5) {
        hour += 12;
    }
    
    // Color code the rows by adding a class. Based on past, present, and future
    // NOTE: as mentioned above the jQuery way wasn't working for me so opted for traditional Web API
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

// Renders the saved events
function renderEvents() {
    // attempt to update events by looping through localStorage
    // console.log(localStorage, typeof(localStorage))
    // for (key in localStorage) {
    //     console.log("key: ", key)
    //     var id = "#" + key;
    //     console.log(id, typeof(id))
    //     var text = localStorage.getItem(key);
    //     console.log(text, typeof(text));
    //     $(id).html(); //localStorage.getItem(localStorage(key))
    // } // FAILED 😭

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

// Render saved events on page load
renderEvents();