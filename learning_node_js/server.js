const http=require('http');
//const is something that cannot be changed
function handleRequest(req,res){
	res.write("Hello from node js server");
	res.end();
}
// req is request , res is reponse
const server =http.createServer(handleRequest);

server.listen(3000,'0.0.0.0',() => {
	console.log("Server running at http://localhost:3000");
});
// the server will listen at port 3000 and 0.0.0.0 will enable us to call it via local host or ip address, 
// this removes the dependancy on lighttpd and cgi the last line handles all that which will be listening at 3000 and when the handleRequest is called then the print/write statement is printed.
// to run simply node file_name.js the open the allocated port like http://localhost:3000 and it will show up but aftering killing it won't run.
