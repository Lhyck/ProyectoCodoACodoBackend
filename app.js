///Servidor Estatico


const express = require ('express');
const app = express ();
const port = 5000;
 
const movieRouters = require ('./src/routers/movies');
const db = require ('./src/db/db');

app.use(express.static('public'));

app.get('/home',(req,res)=>{ 
    res.send('Bienvenidos al sitio !!!!');
});

app.get('/index_fijo',(req,res)=>{
   res.sendFile(__dirname + '/index_fijo.html');
});

 app.use(express.json);
 app.use('/movies', movieRouters);

app.listen(port, () => {
    console.log(`El Servidor esta encendido http://localhost:${port}/`);
});