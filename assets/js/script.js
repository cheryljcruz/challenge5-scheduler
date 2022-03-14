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
function timeIn() {
saveBtn.on("click", function() {
    var hourBlock = $(this).siblings(".hour").text();
    var textArea = $(this).siblings(".description").val();
    
    console.log(hourBlock);
    console.log(textArea);
    
    localStorage.setItem(hourBlock, textArea);
  
});

}
timeIn();

//set localstorage
$("#9am").val(localStorage.getItem("9AM"));
$("#10am").val(localStorage.getItem("10AM"));
$("#11am").val(localStorage.getItem("11AM"));
$("#12pm").val(localStorage.getItem("12PM"));
$("#1pm").val(localStorage.getItem("1PM"));
$("#2pm").val(localStorage.getItem("2PM"));
$("#3pm").val(localStorage.getItem("3PM"));
$("#4pm").val(localStorage.getItem("4PM"));
$("#5pm").val(localStorage.getItem("5PM"));
