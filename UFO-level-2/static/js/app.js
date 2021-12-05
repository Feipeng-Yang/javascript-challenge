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

// Display all data upon opening the page


// Complete the event handler function for the form
function runEnter() {
    // Clear the table body before appendig new data
    $("#table-body").empty();
  // Prevent the page from refreshing
  // d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  // var inputElement = d3.select("#datetime");

  // Get the value property of the input element ---------date----
  var inputDate = d3.select("#datetime").property("value");
  // Get the value property of the input element ---------date----
  var inputCity = d3.select("#city").property("value");
  // Get the value property of the input element ---------date----
  var inputState = d3.select("#state").property("value");
  // Get the value property of the input element ---------date----
  var inputCountry = d3.select("#country").property("value");
  // Get the value property of the input element ---------date----
  var inputShape = d3.select("#shape").property("value");

  let currentData = tableData;
  if (inputDate) {
    currentData = currentData.filter(o => o.datetime === inputDate);
  };

  if (inputCity) {
    currentData = currentData.filter(o => o.city === inputCity);
  };

  if (inputState) {
    currentData = currentData.filter(o => o.state === inputState);
  };

  if (inputCountry) {
    currentData = currentData.filter(o => o.country === inputCountry);
  };

  if (inputShape) {
    currentData = currentData.filter(o => o.shape === inputShape);
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

runEnter();