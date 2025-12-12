// Part4: Sorting and Manipulation Data ========================


let sortedArray = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }
];


// 1. Remove the last element from the sorted array using .(pop)

sortedArray.pop();

// 2. Insert Object at index 1

sortedArray.splice(1, 0, {
    id: "48",
    name: "Barry",
    occupation: "Runner",
    age: "25"


});

// 3. Add object to the end of the array

sortedArray.push({
    id: "7",
    name: "Biblo",
    occupation: "None",
    age: "111",

});

console.log(sortedArray);


// 4. calculate the average age of the group using  forEach() loop

let totalAge = 0;

sortedArray.forEach(person => {
  totalAge += Number(person.age);
});

let averageAge = totalAge / sortedArray.length;

console.log("Average Age:", averageAge);

