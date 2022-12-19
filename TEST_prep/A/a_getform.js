express = require("express")
app = express()
path = require('path')
//bodyparser = require('body-parser')
//urlencodedparser = bodyparser.urlencoded({extended:false})
multer = require("multer")
upload = multer()
app.use(upload.array())
mongoclient = require("mongodb").MongoClient
app.get("/form",function(req,res){
	//res.sendFile("C:/Users/SINDHU/A/Unit5/a_form.html")
	options = {root:path.join(__dirname)}
	res.sendFile("a_form.html", options, function(err){
		if(err)
			console.log(err)
		else
			console.log("form sent")
		
	})
	
})


//app.post("/process_data",urlencodedparser, function(req,res){
app.post("/process_data", function(req,res){
//	console.log(req.body)
//	res.send("u entered"+JSON.stringify(req.body))

	mongoclient.connect("mongodb://localhost:27017",function(err,client){
		db = client.db("sample_db")
		db.collection("data4").insertOne(req.body, function(err)
		{
			if(err)
				console.log(err)
			else
			{
			//	res.send("inserted to collection")
				db.collection("data4").find().toArray(function(err,obj){
					
				//	res.send(obj)
				res.send("inserted to collection<br/>"+JSON.stringify(obj))
					client.close()
				})
			}
				
			
			
		})
		
		
		
		
	})
	
})
app.listen(3000,function(){
	console.log("server is running")
})