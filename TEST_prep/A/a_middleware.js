express = require("express")
app = express()

app.get("/",function(req,res,next){
	
	console.log("in first get")
	next()
})
app.use("/sssss",function(req,res,next){
	
	console.log("in first")
	next()
})
app.get("/:msg",function(req,res,next){
	
	console.log("in second get",req.params.msg)
	next()
})
app.use(function(req,res,next){
	
	console.log("in middle")
	next()
})
app.use("/gfgfg",function( req,res){
	console.log("added now")
	
})
app.use(function(req,res){
	
	console.log("in last")
})
app.listen(3000,function(){
	console.log("server is running")
})
