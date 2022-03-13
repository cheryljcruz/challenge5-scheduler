// moment.js to  display current day at the top of calendar
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
// time blocks for standard business hours
// - columns inside rows - in html
// time blocks color coded to indicate whether past, present or future
function colorBlock() {
    // get hours from current time
    var setTime = moment().hour();
 $(".time-block").each(function () {
    var currentTime = parseInt($(this).attr("id"));

    if (currentTime > setTime) {
        $(this).addClass("future");
    } else if 
        (currentTime === setTime) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");

        }
    })
};
colorBlock();
// click into time block to enter an event
// click the save button for that time block > text for event is saved in localstorage
var saveBtn = $(".saveBtn");

saveBtn.on("click", function() {
    var textArea = $(this).siblings(".description").val();
    var hourBlock = $(this).siblings(".hour").text();

    console.log(textArea);
    console.log(hourBlock);

    localStorage.setItem(textArea, hourBlock);
    
});


//set localstorage
$("#9am .description").val(localStorage.getItem("9am"));
$("#10am .description").val(localStorage.getItem("10am"));
$("#11am .description").val(localStorage.getItem("11am"));
$("#12pm .description").val(localStorage.getItem("12pm"));
$("#1pm .description").val(localStorage.getItem("1pm"));
$("#2pm .description").val(localStorage.getItem("2pm"));
$("#3pm .description").val(localStorage.getItem("3pm"));
$("#4pm .description").val(localStorage.getItem("4pm"));
$("#5pm .description").val(localStorage.getItem("5pm"));
