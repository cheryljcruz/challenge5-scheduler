// moment.js to  display current day at the top of calendar
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
// time blocks for standard business hours
// - columns inside rows - in html
// time blocks color coded to indicate whether past, present or future
function colorBlock() {
    // get hours from current time
    var setTime = moment().hours();
 $(".time-block").each(function () {
    var currentTime = parseInt($(this).attr("id"));

    if (currentTime > setTime) {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
    } else if 
        (currentTime === setTime) {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        } else {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");

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

    localStorage.setItem(textArea, hourBlock);
    localStorage.getItem("time-block", textArea);
});
colorBlock();

