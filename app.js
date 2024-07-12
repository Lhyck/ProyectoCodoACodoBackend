///Servidor Estatico


const express = require ('express');
const app = express ();
const port = 5000;

app.use(express.static('public'));
 
app.get('/home',(req,res)=>{
 
    res.send('hi Lulu carita fea fea');
  
});

app.get('/index_fijo',(req,res)=>{
 
    res.sendFile(__dirname + '/index_fijo.html');
   
});

app.listen(port, () => {
    console.log(`El Servidor esta encendido http://localhost:${port}/`
);
});