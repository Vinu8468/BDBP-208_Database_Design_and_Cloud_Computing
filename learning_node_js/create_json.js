// Create a client side node JS file to create a JSON object student and display it as a string

// first create a student object
const student = {
	name: "Vineeth Devadiga",
	age: 22,
	course: "Big Data Biology",
	university: "IBAB"
};
// this is like a dictionary

// convert the json object to string
const studentString = JSON.stringify(student);

// Display it
console.log("student JSON as string:")
console.log(studentString);

