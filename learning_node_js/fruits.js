//Create an array of fruits - Add one more fruit at beginning/end, remove the first fruit/last fruit

let fruits = ["Apple",'Chikko',"Mango"];

console.log("Original array:",fruits);

// Adding fruit at last

fruits.push("Grapes");
console.log("Adding fruit at the end",fruits);
// Adding fruit at begining
fruits.unshift("Orange");
console.log("Adding fruit at the begining",fruits);
// Removing from end
fruits.pop("Grapes");
console.log("Removing fruit from the end",fruits);
// Removing from the end
fruits.shift("Orange");
console.log("Removing fruit from the begining",fruits);

