// Dana Al-Shalfouh    220171822

//edit your code
//get
fetch('http://localhost:3000/user?name=dana',{
    method:'GET',
    headers: {
        'Content-Type': 'application/json',
      },
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
});

//post
const data = {name : "Dana"};
fetch('http://localhost:3000/user', {
 method: 'POST', 
 headers: {
   'Content-Type': 'application/json',
 },
 body: JSON.stringify(data),
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
   console.log(err);
})