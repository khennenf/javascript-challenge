// from data.js
var tableData = data;

// YOUR CODE HERE!

//Check data import
      // console.log(tableData)

//Reference to the table body
var tbody = d3.select("tbody");

//Console log each object
tableData.forEach(function(ufoSightings){
    // console.log(ufoSightings);
});

//Append the table rows
tableData.forEach(function(ufoSightings) {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(function([key, value]) {
        row.append("td").text(value)
});

});

var button = d3.select('#filter-btn')
var form = d3.select('#datetime')

button.on("click", run)
form.on("submit", run)

//Do not refresh page
function run(){
    d3.event.preventDefault()

    var inputElement = d3.select('#datetime')

    var value = inputElement.property('value')
    
    console.log(value)

}