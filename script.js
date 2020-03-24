// Create variable that uses moment.js to retrieve the current day
// Display as `day of the week`, day month year
var today = moment().format("dddd, D MMMM YYYY")

// Create variable that uses moment.js to retrieve the current hour (military time)
var currentHour = moment().hour();

// Grab a reference to all div elements with class of time-block
// var timeBlockArr = $(".time-block").attr("class")
var timeBlockArr = $(".time-block")

// This multipurpose function colors the textarea blocks depending on the current time
// and also populates the textarea fields with saved tasks (if there are any)
function checkTimes(){
    $("textarea").each(function(){
        // Stores the id of each textarea into variable textAreaIdInt, converting the id from string to integer
        var textAreaIdInt = parseInt($(this).attr("id"))
        // Also looks into localStorage for the saved task associated with the textarea id
        var savedTask = localStorage.getItem($(this).attr("id"))
        // If the textarea id integer matches the current hour,
        if (textAreaIdInt === currentHour) {
            // we add a class called `present` to the text area
            $(this).addClass("present");
            // and remove any classes called `past` or `future`
            $(this).removeClass("past future");
        } else if (textAreaIdInt < currentHour) {
            // Similar process for adding and removing past hours
            $(this).addClass("past");
            $(this).removeClass("present future");
        } else {
            // and future hours
            $(this).addClass("future");
            $(this).removeClass("past present");
        }

        // If the saved task associated with the textarea id exists
        // in other words, if there already was a saved task in local storage for this hour,
        // push that saved task to the textarea. If it doesn't exist in local storage,
        // nothing happens
        if (savedTask) {
            $(this).val(savedTask)
        }
    })
}

// Assigns a click function to the document and checks if it was on the save button (event delegation)
$(document).on("click", ".saveBtn", function(){
    // the variable prevTextArea targets the html element prior to the save button, which is the text area
    var prevTextArea = $(this).prev();
    // the variable task is the text the user typed in the text area
    var task = prevTextArea.val();
    // if the task has a length, i.e. not empty,
    if (task.length) {
        // set variable time to the textarea id
        var time = prevTextArea.attr("id")
        // and stores the time and task into local storage as a key pair
        localStorage.setItem(time, task)
    }
})

// Assigns a click function to the document and checks if it was on the clear button (event delegation)
$(document).on("click", ".clearBtn", function(){
    // the variable prevTextAreaId targets the id of the html element 2 elements prior to the clear button, which is the text area
    var prevTextAreaId = $(this).prev().prev().attr("id");
    // this just targets the text area itself instead of the id
    var prevTextArea = $(this).prev().prev();
    // go into local storage and remove the key pair associated with the id, or the hour
    localStorage.removeItem(prevTextAreaId);
    // sets the associated text area to an empty string, appearing empty
    prevTextArea.val("")
})

// Display today's date in header, id of currentDay
$("#currentDay").text(`Today is ` + today);

// call the checkTimes function to look into local storage and see if there are any saved tasks
checkTimes();

// every 60 seconds, run checkTimes to update the color of the hour blocks
setInterval(checkTimes, 1000 * 60);