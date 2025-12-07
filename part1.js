// ===========================================
// Part1: Refactored old code( feeling loopy)
//using arrays and objets
//=============================================

// CSV string
const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

// 1. split into rows by newline
// 2. First row is the header
// 3. create and array to store row objects

const rows = csvData.split("\n");
const headers = rows[0].split(",");
const records = [];

// 4. Loop through data rows starting at 1

for (let i = 1; i < rows.length; i++) {
    const cells = rows[i].split(",");
    const record = [];


    
//5. Match each cell to the correct header

for (let j = 0; j < headers.length; j++) {
    const key = headers[j];
    const value = cells[j];
    record[key] = value;

}



    console.log(record.ID, record.Name, record.Occupation, record.Age );
}
