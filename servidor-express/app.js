

const express = require ('express');
const app = express ();
const port = 5000;

app.use(express.static('public'));
 
app.get('/home',(req,res)=>{
    
    res.send('hi Lulu carita fea fea');
   // app.send   (express.static(__dirname + "index_fijo.html"))
});

app.listen(port, () => {
    console.log(`El Servidor esta encendido http://localhost:${port}/`
);
});
