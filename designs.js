// Select color input
// Select size input
const heightInput = document.getElementById('inputHeight');
const widthInput = document.getElementById('inputWidth');

// When size is submitted by the user, call makeGrid()
const tableElement = document.getElementById('pixelCanvas');
const formElement = document.getElementById('sizePicker');
formElement.addEventListener("submit", onSubmitQuery);

function makeGrid() {

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