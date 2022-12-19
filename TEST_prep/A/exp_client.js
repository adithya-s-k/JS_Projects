var fetch=require('node-fetch')
/*fetch('http://localhost:3000',{
    method:'GET'
})
.then((res)=>res.text())
.then((res)=>console.log(res))
*/

/*fetch('http://localhost:3000/student/?dept=cse1',{
    method:'GET',
    headers:{'Accept':'application/json'},
})
.then((res)=>res.json())
.then((res)=>console.log(res))
*/

/*fetch('http://localhost:3000/student',{
    method:'POST',
    headers:{'content-type':'application/json'},
    body:JSON.stringify({"name":"sindhu","srn":"2455","dept":"cse1"})
})
.then((res)=>res.text())
.then((res)=>console.log(res))
*/



/*fetch('http://localhost:3000/student/2455',{
    method:'PUT',
    headers:{'content-type':'application/json'},
    body:JSON.stringify({"name":"krish","srn":"254"})
})
.then((res)=>res.text())
.then((res)=>console.log(res))
*/

fetch('http://localhost:3000/student/254',{
    method:'DELETE',
    headers:{'content-type':'application/json'},
    
})
.then((res)=>res.text())
.then((res)=>console.log(res))




