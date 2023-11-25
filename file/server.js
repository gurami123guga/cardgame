const express=require("express");
const app=express();
const path=require("path");

//.......................................
app.use(express.static(__dirname));
app.get("/",function(req,res){
	res.sendFile(path.join(__dirname,"file.html"));

})







app.listen(8080,"0.0.0.0",e=>{
	console.log("server running");
})



