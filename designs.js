// Select color input
const colorInput = document.getElementById('colorPicker');
// Select size input
const heightInput = document.getElementById('inputHeight');
const widthInput = document.getElementById('inputWidth');

const tableElement = document.getElementById('pixelCanvas');
tableElement.addEventListener("click", changeCellColor);
// When size is submitted by the user, call makeGrid()
const formElement = document.getElementById('sizePicker');
formElement.addEventListener("submit", onSubmitQuery);

// Set the grid when DOM is ready
document.addEventListener('DOMContentLoaded', makeGrid);

function makeGrid() {
    // Remove previous rows and columns
    removeExistingRows();

    // Add the new rows and columns
    const rows = heightInput.valueAsNumber;
    const columns = widthInput.valueAsNumber;
    for(var row = 0; row < rows; row = row + 1) {
        tableRow = document.createElement('tr');    
        for(col = 0; col < columns; col = col + 1)
        {
            tableCell = document.createElement('td');                

            tableRow.appendChild(tableCell);
        }

        tableElement.appendChild(tableRow);
    }
}

function onSubmitQuery(event) {
    // Stop the default event
    event.preventDefault();
    // Make the grid
    makeGrid();    
}

function removeExistingRows() {
    
    while(tableElement.firstChild != null)
    {
        var tableRow = tableElement.removeChild(tableElement.firstChild);      
        while(tableRow.firstChild)
        {
            var tableCell = tableRow.removeChild(tableRow.firstChild);           
        }  
    }
}

function changeCellColor(event)
{
    if(event.target.nodeName === "TD")
    {
        var color = colorInput.value;

        if(event.target.style.backgroundColor === "")
        {
            event.target.style.backgroundColor = color;
        }
        else
        {
            event.target.style.backgroundColor = "";
        }
    }
}