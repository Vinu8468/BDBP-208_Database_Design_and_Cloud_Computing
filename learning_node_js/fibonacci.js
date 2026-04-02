//b. Create a client side node JS file for displaying the first 10 Fibonacci numbers

// get the user input which is 'how many numbers of fibonacci to display '

const n =Number(process.argv[2]);

let a=0,b=1;

console.log("Fibonacci Series:")

for (let i=1; i<=n; i++) {
	console.log(a);
	let next = a+b;
	a=b
	b=next;
}

// a simple for loop without any error handlinng to print finonacchi numbers till n which is given in the commandline.
