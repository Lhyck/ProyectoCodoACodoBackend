const express = require('express')
const router = require ('router')
const port = 5000;
const moviesRouter = require ('./movies.js')
 
app.use(express.json());


app.get('/src/routers/movies.js',(req,res)=>{
 
    res.sendFile(__dirname + '/index_fijo.html');
   
});

app.listen(port, () => {
    console.log(`El Servidor esta encendido http://localhost:${port}/`
);
});