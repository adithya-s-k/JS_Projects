express = require("express")
router = express.Router()
/*router.get("/",function(req,res){
		res.send("in products home page")
})
*/

router.get("/",function(req,res,next){
	next(new Error("path not there"))
	console.log("in product page")
	
})
module.exports = router
