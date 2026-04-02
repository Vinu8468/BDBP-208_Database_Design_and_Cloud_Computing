const fs = require("fs");
fs.readFile("data.txt","utf8",function(err,data) {
	if (err) {
		console.log("Error reading file");}
	console.log("file content:",data);
});
// this is one way to  do it which the arrow ..// allow me to show the next slight syntax change
// const fs = require("fs");
//fs.readFile("data.txt","utf8",(err,data)=> {
//        if (err) {
//                console.log("Error reading file");}
//        console.log("file content:",data);
//});
//
//Here the err and data are not user given but predefined
//
//if the directory doesn't have any file named "data.txt" it'll put up the error message.
