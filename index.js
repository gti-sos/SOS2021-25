// var cool = require ("cool-ascii-faces");
var express = require ("express");
var path = require("path");

var app = express();
var port = 10000;

// app.get("/cool",(request,response) => {
// 	response.send(cool());
// 	console.log("New request to /cool hasta arrived");
// });

app.use("/",express.static(path.join(__dirname,"public")));


app.get("/info/rentals",(req,res)=>{
	res.send()
});

// app.get("/public/index.html",(req,res) =>{
// 	res.render(path.join(__dirname,"/public/index.html"));
// });

app.listen(port,() => {
	console.log(`Server ready lintening on port ${port}`);
})

