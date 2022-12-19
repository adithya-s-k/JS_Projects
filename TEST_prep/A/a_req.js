
express = require("express")
app = express()
app.get("/hello/:msg/:msg1",function(req,res){
	//console.log(req.params)
	//res.send("<h1> welcome"+req.params.msg+"</h1>")	
	//console.log(req.query)
	//if(req.query.uname == "sindhu")
	/*if(req.query['uname'] == "sindhu")
		res.send(req.query.ucompany)
	else
		res.send("not found")
	*/
//	res.send(req.path)
//res.send("<h1> welcome"+req.params.msg+" "+req.params.msg1+"</h1>")

//console.log(req.url,req.originalUrl)	
})
app.get("/hello",function(req,res){
	//console.log(req.params)
	//res.send("<h1> welcome"+req.params.msg+"</h1>")	
	//console.log(req.query)
	//if(req.query.uname == "sindhu")
	/*if(req.query['uname'] == "sindhu")
		res.send(req.query.ucompany)
	else
		res.send("not found")
	*/
	
	//res.send(req.headers)
	//res.send(req.header("host"))
	
	//res.send(req.path)
//	res.status("300").send("<h1>hello</h1>")
})
app.get('/hello/form.html',function(req,res){
	console.log(req.path)
	res.sendFile("C:/Users/SINDHU/A/Unit5/form.html")
	
})
app.listen(3000,function(){
	
	console.log("server is up")
})