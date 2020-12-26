
//Dana Al-Shalfouh    220171822


const express = require('express');
var bodyParser = require('body-parser');
const CORS = require('cors');
const app = express();
app.use(CORS());
app.use(bodyParser.json());



//write your code 
// get
app.get('/user',(req,res)=>{
    const data1 = req.param('name');
    res.json({message : "Hello" + ' ' + data1});
});

//post
 app.post('/user',(req,res)=>{ 
    const data = req.body ;
    res.json({message:'hello' +  ' , ' +  req.body.name });  
});

 app.listen(3000,()=>{
    console.log('server running on port 3000'); 
 })
