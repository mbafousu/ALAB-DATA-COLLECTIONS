//===================================
// Part3: Transforming Data
//==================================


const csvTable = [
[ 'ID', 'Name', 'Occupation', 'Age' ],
[ '42', 'Bruce', 'Knight', '41' ],
[ '57', 'Bob', 'Fry Cook', '19' ],
[ '63', 'Blaine', 'Quiz Master', '58' ],
[ '98', 'Bill', 'Doctor’s Assistant', '26' ]
]
//   Steps
// 1. Extract header row and convert each heading to lower-case
// 2. prepare an array to store the new objects
// 3. Loop through the remaining rows
// 4. Assign each cell value to the correct key from headers
// 5. store the object in the results array

const headers = csvTable[0].map(h => h.toLowerCase());
const objectResults = [];
for (let i = 1; i < csvTable.length; i++) {
 const row = csvTable[i]
  const obj = {}; 
  for (let j = 0; j < headers.length; j++) {
    const key = headers[j]; 
    const value = row[j];   
    obj[key] = value;       
  }

  objectResults.push(obj);

}
console.log(objectResults);





