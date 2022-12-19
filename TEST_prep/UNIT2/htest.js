function init()
{
		span = document.querySelector("span")
		buttons = document.querySelectorAll("button")
		buttons[0].addEventListener("click",function(){
			w = new Worker("hworker.js")
			w.onmessage = function(){
				
				span.innerHTML = event.data
			}
			
			
		})
		
		buttons[1].addEventListener("click",function(){
			
			w.terminate()
			//alert(w)
			w = undefined
			//alert(w)
			
		})
		
		
		
		
		
		
		
		/*w.postMessage("hello")
		w.onmessage = function()
		{
				h1.innerHTML = event.data
		}
*/		
}