express = require('express')
app = express()
app.use(function(req,res,next){
	reqtime = new Date()
	next()
	
})
app.get("/",function(req,res){
	//reqtime = new Date()
	res.send(reqtime)
	
})
app.get("/hello",function(req,res){
	//reqtime = new Date()
	res.send(reqtime)
	
})
app.listen(3000, function(){
	console.log("server is running")
})