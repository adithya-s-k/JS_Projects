express = require("express")
app = express()

app.get("/student",function(req,res){
	res.send("welcome to student home page")
	
})
app.get("/student/:id",(req,res,next)=>{
	// console.log(req.params.id.indexOf("2000"))
	  err = new Error("path contains 2000")
	  err.status = 500

	 if(req.params.id.indexOf("2000") != -1)
	 {
			next(err)
	 }
	 else
	 {
		res.send("there is no 2000 in the path specified")	
	 }
	
})
app.use(function(err, req,res,next){
	
	res.send("error object is from middleware")
	
	
})

app.listen(3000, function(){
	console.log("server is running")
})