var now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

setInterval(function () {
    $('#currentDay').html(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))
}, 0);