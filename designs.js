//****Updates gridWidth Variable before being submitted
  //**Receives the Original Value of the Input incase no change is made to the Width Input
let gridWidth = document.getElementById("inputWidth").value;
  console.log(`Width: ${gridWidth}`);

  //**Event Listener to update the gridWidth Variable with every new input entered
  let width = document.getElementById("inputWidth");

width.addEventListener("input", function() {

  gridWidth = document.getElementById("inputWidth").value;
  console.log(`Width: ${gridWidth}`);

});

//****Updates gridHeight Variable before being Submitted
  //**Receives the Original Value of the Input incase no change is made to the Height Input
let gridHeight = document.getElementById("inputHeight").value;
  console.log(`Height: ${gridHeight}`);

  //**Event Listener to update the gridHeight Variable with every new input entered
  let height = document.getElementById("inputHeight");

height.addEventListener("input", function() {

  gridHeight = document.getElementById("inputHeight").value;
  console.log(`Height: ${gridHeight}`);

});

//****Changes the color Pickers Color at will
  //**Receives the Original Value of the Input incase no change is made to the Color Input
let fillColor = document.getElementById("colorPicker").value;
console.log(`Color of Block ${fillColor}`);

  //**Updates the color without having to hit the submit button
  let color = document.getElementById("colorPicker");

color.addEventListener("change", function() {

  fillColor = document.getElementById("colorPicker").value;
    console.log(`Color of Block ${fillColor}`);

});

//Changes the Box that is clicked on to the Color Specified in the fillColor Variable
document.addEventListener("click", function(event){

if(event.target.nodeName === "TD"){
      console.log("Box Clicked");
      event.target.style.backgroundColor = fillColor;
      }
  });

//Global Table Variable
let table = document.querySelector("table");
  console.log(table);

// When size is submitted by the user, call makeGrid()
function makeGrid() {

  console.log(`Width: ${gridWidth}`);
  console.log(`Height: ${gridHeight}`);
  console.log(`Color of Block ${fillColor}`);

//Makes Rows and Columns
let row;
let col;
  for (let r = 0; r < gridHeight; r++){
    row = document.createElement("tr");
    table.appendChild(row);
    for (let c = 0; c < gridWidth; c++){
      col = document.createElement("td");
      row.appendChild(col);
    }
  }
  return false;
}
