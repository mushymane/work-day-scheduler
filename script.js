var now = moment();

var timeBlocks = document.getElementsByClassName("time-block");
console.log(timeBlocks)

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