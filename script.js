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
            // if statements to remove classes
        } else if (textAreaIdInt < currentHour) {
            $(this).addClass("past");
        } else {
            $(this).addClass("future");
        }

        if (savedTask) {
            $(this).val(savedTask)
        }
    })
}

$("i").on("click", function(){
    var prevTextArea = $(this).parent().prev();
    var task = prevTextArea.val();
    if (task.length) {
        var time = prevTextArea.attr("id")
        localStorage.setItem(time, task)
    }
})

// Create .clear on click to clear
 
// console.log(textAreaIdArr)

// Identifies which hour should be marked as past, present, or future
// $.each(textAreaIdArr, function(){
//     var intElement = parseInt(textAreaIdArr)
// })

// $.each("textarea", function() {
//     if($(this).id == currentHour) {
//         console.log("present")
//     }
// })

// Identify the text area element with the id matching the current hour
// Push class of present


// for (i=0; i<textAreaArr.length; i++) {
//     var currentElement = textAreaArr[i];
//     console.log(currentElement.attr("id"))
// }
// var textAreaId = 


// Display today's date in header, id of currentDay
$("#currentDay").text(`Today is ` + today);
checkTimes();
setInterval(checkTimes, 1000 * 60);