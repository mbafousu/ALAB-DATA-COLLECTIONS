// Part2: Expanding Functionality

const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

// 1. split into row by new line 

const rows = csvData.split("\n");
const headerRow = rows[0];  
const headerCells = headerRow.split(",");

// number of columns

const numColumns = headerCells.length;
console.log("Number of columns:", numColumns);

// 2. Build 2D array to store  all rows

const table = [];

// 3. loop through each row in the csv

for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].split(",");
    if (cells.length === numColumns) {
        table.push(cells);
    } else {
        console.log("Row", i, "has unexpected number of colums:", cells);
    }

}
// log the full stable structure 
const csvTable = table;
console.log("2D array table:", csvTable);