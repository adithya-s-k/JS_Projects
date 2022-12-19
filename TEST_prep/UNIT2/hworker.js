/*self.onmessage = function(event)
{
		self.postMessage(event.data+" sindhu")
}*/

count = 0
function counter()
{
	//document.write("count is")
	//self.postMessage("count is: "+count)
	self.postMessage(count)
	count++
	setTimeout(counter,500)
	
}
counter()