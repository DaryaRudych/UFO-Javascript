// from data.js
var tableData = data;

// Appending all data to a table 
    var tbody = d3.select("#ufo-table").select("tbody");
    // tbody.text("");
    tableData.forEach(function(ufo) {
    var row = tbody.append("tr")
	row.append("td").text(ufo.datetime)
	row.append("td").text(ufo.city)
	row.append("td").text(ufo.state)
	row.append("td").text(ufo.country)
	row.append("td").text(ufo.shape)
	row.append("td").text(ufo.durationMinutes)
	row.append("td").text(ufo.comments)
})

// Function to render a new table based on the user input
function new_table(filteredufo) {
    d3.select("tbody").remove();
    d3.select("#ufo-table").append("tbody");
    var tbody = d3.select("#ufo-table").select("tbody");
    // tbody.text("");
    filteredufo.forEach(function(ufo) {
    var row = tbody.append("tr")
	row.append("td").text(ufo.datetime)
	row.append("td").text(ufo.city)
	row.append("td").text(ufo.state)
	row.append("td").text(ufo.country)
	row.append("td").text(ufo.shape)
	row.append("td").text(ufo.durationMinutes)
	row.append("td").text(ufo.comments)
})
}  

// Defining logic for the filter button
var filter = d3.select("#filter-btn");
filter.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var InputElement = d3.select(".form-control");
    var InputValue = InputElement.property("value")
    var filteredufo = data.filter(ufo => ufo.datetime === InputValue)
    var new_data = new_table(filteredufo)
    return new_data
})
