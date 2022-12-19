express = require('express')
app = express()
pr_router = require('./products.js')
app.use("/products",pr_router)
app.get("/",function(req,res){
	res.send("welcome to home page")
})

app.use(function(resq,res,next){
	err = new Error("not found")
	err.status =  400
	next(err)
	
})
app.use(function(err,req,res,next){
	res.status = err.status || 500
	res.send({error:{status:res.status,message:err.message}})
	
})
app.listen(3000, function(){
	console.log("server is running")
})