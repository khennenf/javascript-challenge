// from data.js
var tableData = data;

// Check data import
    //   console.log(tableData)

// Reference to the table body
var tbody = d3.select("tbody");

//Append the table rows
tableData.forEach(function(ufoSightings) {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(function([key, value]) {
        row.append("td").text(value)
    });
});

//Button Variable
var button = d3.select('#filter-btn')

//Form Variable
var form = d3.select('#datetime')

//Listener definition
button.on("click", run)

//Listener definition
form.on("submit", run)


//Filter function
function run(){
    d3.event.preventDefault() // Do not refresh page

    //select element for input
    var inputElement = d3.select('#datetime'); 

    //assign value to input element
    var inputValue = inputElement.property('value'); 

    //filter data based on search input value
    var filteredData = tableData.filter(sighting => sighting.datetime == inputValue)
    console.log(filteredData)

    //clear default table data
    var tb = document.getElementById('ufo-table');
        while(tb.rows.length > 1) {
        tb.deleteRow(1);
        }

    //append table with filtered data
        filteredData.forEach(function(filteredSightings) {
        var row = tbody.append("tr");
        Object.entries(filteredSightings).forEach(function([key, value]) {
            row.append("td").text(value)
        });
    }
    );

}