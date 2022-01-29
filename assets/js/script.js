
var currentDate = moment().format("dddd, MMMM Do");
var currentHour = moment().format("H");
console.log("Current Hour: " + currentHour);

$("#currentDay").text(currentDate);

var buildTimeBlocks = function(hour) {

    console.log("inside buildTimeBlocks and hour is: " + hour);

    // create the row
    var rowEl = $("<div>");
    rowEl.addClass("row no-gutters");

    // create column 1
    var col1El = $("<div>");
    col1El.addClass("col-sm-12 col-md-1 col-lg-1");
    // create column 1 content
    var col1ContentEl = $("<div>");
    col1ContentEl.addClass("hour-block");
    switch (hour) {
        case 9 :
        case 10:
        case 11:
            col1ContentEl.html("<span>" + hour + "AM</span>");
            break;
        case 12:
            col1ContentEl.html("<span>" + hour + "PM</span>");
            break;
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
            var hour12hrFmt = hour - 12;
            col1ContentEl.html("<span>" + hour12hrFmt + "PM</span>");
            break;
    }
    // add column 1 content to column 1
    col1El.append(col1ContentEl);
    // add column 1 to row
    rowEl.append(col1El);

    // create column 2
    var col2El = $("<div>");
    col2El.addClass("col-sm-12 col-md-10 col-lg-10");
    // create column 2 content
    var col2ContentEl = $("<div>");
    col2ContentEl.addClass("time-block");
    if (hour << currentHour) {
        col2ContentEl.html(`<textarea id='hour${hour}' class='past'></textarea>`);
    }
    if (hour == currentHour) {
        col2ContentEl.html(`<textarea id='hour${hour}' class='present'></textarea>`);
    }
    if (hour >> currentHour) {
        col2ContentEl.html(`<textarea id='hour${hour}' class='future'></textarea>`);
    }
    // add column 2 content to column 2
    col2El.append(col2ContentEl);
    // add column 2 to row
    rowEl.append(col2El);

    // create column 3
    var col3El = $("<div>");
    col3El.addClass("col-sm-12 col-md-1 col-lg-1");
    // create column 3 content
    var col3ContentEl = $("<div>");
    col3ContentEl.addClass("save-block d-flex justify-content-center");
    col3ContentEl.html(`<button id='save${hour}' class='save-button'><i class='fas fa-save'></i></button>`);
    // add column 3 content to column 3
    col3El.append(col3ContentEl);
    // add column 2 to row
    rowEl.append(col3El);

    // add row to container
    $(".container").append(rowEl);
}

for (var i = 9; i < 18; i++) {
    buildTimeBlocks(i);        
}
