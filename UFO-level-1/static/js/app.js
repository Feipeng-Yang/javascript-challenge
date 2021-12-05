console.log("app.js loaded.");
// from data.js
var tableData = data;
// console.log(tableData);
// YOUR CODE HERE!
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Get a reference to the table body
var tbody = d3.select("tbody");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);



// Complete the event handler function for the form
function runEnter() {
    // Clear the table body before appendig new data
    $("#table-body").empty();
  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  let currentData = tableData;
  if (inputValue) {
    currentData = tableData.filter(o => o.datetime === inputValue);
  };
  

  // console.log(currentData);

    // append the data to the table   
    currentData.forEach((encounter) => {
        var row = tbody.append("tr");
        Object.entries(encounter).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
};

// runEnter();