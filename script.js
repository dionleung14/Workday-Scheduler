// Create variable that uses moment.js to retrieve the current day
// Display as `day of the week`, day month year
var today = moment().format("dddd, D MMMM YYYY")

// Create variable that uses moment.js to retrieve the current hour (military time)
var currentHour = moment().hour();

// Grab a reference to all div elements with class of time-block
// var timeBlockArr = $(".time-block").attr("class")
var timeBlockArr = $(".time-block")

// Converts the array of textarea ids from strings to integers
function checkTimes(){
    $("textarea").each(function(){
        var textAreaIdInt = parseInt($(this).attr("id"))
        var savedTask = localStorage.getItem($(this).attr("id"))
        if (textAreaIdInt === currentHour) {
            $(this).addClass("present");
            $(this).removeClass("past future");
        } else if (textAreaIdInt < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("present future");
        } else {
            $(this).addClass("future");
            $(this).removeClass("past present");
        }

        if (savedTask) {
            $(this).val(savedTask)
        }
    })
}

$(document).on("click", ".saveBtn", function(){
    var prevTextArea = $(this).prev();
    var task = prevTextArea.val();
    if (task.length) {
        var time = prevTextArea.attr("id")
        localStorage.setItem(time, task)
    }
})

$(document).on("click", ".clearBtn", function(){
    var prevTextAreaId = $(this).prev().prev().attr("id");
    var prevTextArea = $(this).prev().prev();
    localStorage.removeItem(prevTextAreaId);
    prevTextArea.val("")
})

// Display today's date in header, id of currentDay
$("#currentDay").text(`Today is ` + today);
checkTimes();
setInterval(checkTimes, 1000 * 60);