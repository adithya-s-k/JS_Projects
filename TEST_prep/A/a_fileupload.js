express = require("express")
app = express()
fileupload = require("express-fileupload")
app.use(fileupload())
app.get("/",function(req,res){
	
	res.send("<h1>welcome to file uplaod</h1>")
})
app.get("/form",function(req,res){
	res.sendFile(__dirname+"/a_fileupload.html")	
})
app.post("/upload", function(req,res){
	
	//console.log(req.files)
	//console.log(req)
	if(!req.files)
		return res.status(404).send("file not available to load to server")
	ufile1 = req.files.uresume
	ufile2 = req.files.uphoto
	ufile3 = req.files.uaddress
	//console.log(ufile.name+ufile.size)
	pname = req.body.uname
	ufile1.mv("./uploads/"+ufile1.name,function(err)
	{
		
		if(err)
			return   res.status(400).send("path not available")
		
		res.write("Dear "+pname+","+ufile1.name+" uploaded successfully")
		console.log("ufile"+err)
		
	})
	ufile2.mv("./uploads/"+ufile2.name,function(err)
	{
		
		if(err)
			return   res.status(400).send("path not available")
		
		res.write("Dear "+pname+","+ufile2.name+" uploaded successfully")
		console.log("ufile"+err)
	})
	ufile3.mv("./uploads/"+ufile3.name,function(err)
	{
		
		if(err)
			return   res.status(400).send("path not available")
		
		res.write("Dear "+pname+","+ufile3.name+" uploaded successfully")
		console.log("ufile"+err)
		res.end()
	})
	
	
})
app.listen(3000, function(){
	console.log("server is running")
})