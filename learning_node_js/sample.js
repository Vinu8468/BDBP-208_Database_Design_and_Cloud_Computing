console.log("File name:", process.argv[1]);
console.log("Arguments passed:",process.argv.slice(2));
// process.argv takes in the command line argument where [0] is node , [1] is directory in which the file is and [2] is the argument passed
// slice will split up the arguments into slices of the argument.
