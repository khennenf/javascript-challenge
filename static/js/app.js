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
        console.log(key, value);
});

});