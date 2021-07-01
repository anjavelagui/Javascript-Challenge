// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

//Creating rows and adding data
var $tbody =d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}
addData(tableData);

//creating code that will listen search request
button.on("click", () => {
    d3.event.preventDefault();
    var inputDate = inputFieldDate.property("value").trim();
    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
 $tbody.html("");
 
 let response = {
     filterData, filterCity, filterDate
}
    if (response.filterData.length !== 0) {
        populate(filterData);
}
    else if (response.filterData.length === 0 && ((response.filterCity.length !== 0 || response.filterDate.length !== 0))){
        populate(filterCity) || populate(filterDate);
    }
    else {
        tbody.append("tr").append("td").text("No found! Try Again!");
    }
})

// reseting 
resetbtn.on("click", () => {
    tbody.html("");
    populate(data)
    console.log("Reset")
})
