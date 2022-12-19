express = require("express")
app = express()

/*app.get("/",function(req,res){
	throw new Error("this is an error")
	
})
*/
fs = require("fs")
app.get("/",function(req,res,next){
	fs.readFile("./error.txt",function(err, data){
		if(err)
			//console.log(err)
			next(err)
		else
			res.send(data.toString())
		
	})
	
})
app.use(function(err,req,res,next){
	
	console.log("error is",err)
	res.send("there is error")
	
})


app.listen(3000, function(){
	console.log("server is running")
})