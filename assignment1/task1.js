const fruits = ["apple", "banana", "orange"];
const vegetables = ["carrot", "broccoli", "spinach"];
console.log(combiningArrays(fruits, vegetables)); // Output: [ 'apple', 'banana', 'orange', 'carrot', 'broccoli', 'spinach' ]

function combiningArrays(fruits,vegetables){
    let groceries=[...fruits,...vegetables]
    return groceries
}

