// Create variable that uses moment.js to retrieve the current day
// Display as `day of the week`, day month year
var today = moment().format("dddd, D MMMM YYYY")

// Create variable that uses moment.js to retrieve the current hour (military time)
var currentHour = moment().hour();

// Grab a reference to all text areas in an array
var textAreaArr = $("textarea")

// Create empty array for textAreaId
var textAreaIdArr = []

// Grab a reference to all div elements with class of time-block
// var timeBlockArr = $(".time-block").attr("class")
var timeBlockArr = $(".time-block")

// Converts the array of textarea ids from strings to integers
$.each(textAreaArr, function(){
    // console.log(this.getAttribute("id")) // gives the text area id in a string
    // console.log(this) // gives the text area element
    // console.log($(this)) // gives the text area object
    textAreaIdArr.push(this.getAttribute("id"))
})


// Identifies which hour should be marked as past, present, or future
$.each(textAreaIdArr, function(){
    var intElement = parseInt(textAreaIdArr)
    if (intElement === currentHour) {
        console.log("present");
    } else if (intElement < currentHour) {
        console.log("past");
    } else {
        console.log("future")
    }
})

// Identify the text area element with the id matching the current hour
// Push class of present


// for (i=0; i<textAreaArr.length; i++) {
//     var currentElement = textAreaArr[i];
//     console.log(currentElement.attr("id"))
// }
// var textAreaId = 


// Display today's date in header, id of currentDay
$("#currentDay").text(`Today is ` + today);