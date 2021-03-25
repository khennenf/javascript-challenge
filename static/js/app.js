// from data.js
var tableData = data;

var getSomeCities = tableData.filter(state => state.state === 'ca')
console.log(getSomeCities)

var getSomeShapes = tableData.filter(shape => shape.shape == 'circle')
console.log(getSomeShapes)

var getSomeDates = tableData.filter(shape => shape.shape == 'circle')
console.log(getSomeDates)

var currentTime = new Date ()
console.log(currentTime)

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

    var inputElement = d3.select('#datetime');

    var value = inputElement.property('value');
    
    console.log(value)

    var stringDate = tableData.toString(datetime)

    var filteredData = tableData.filter(datetime => stringDate == value)

    console.log(stringDate)

}



