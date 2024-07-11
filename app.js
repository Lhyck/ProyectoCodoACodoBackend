///Servidor Estatico


const http = require ('http');
const fs = require ('fs');


    //    const server = http.createServer((req,res)=>{
    //    res.writeHead (200, {
    //        'Content-Type':'text/html, charset=UTF-8'
    //    });
    //    res.end ('hi ly');
    //    } );

const server = http.createServer((req,res)=>{
    const file = fs.readFileSync(__dirname + '/proyecto_movies_cac/index_fijo.html')
    res.writeHead(200,{
    'Content-Type': 'text/html; charset=UTF-8'
    });
    res.end(file);
});

server.listen(5000, ()=> console.log(

    "El Servidor esta encendido http://localhost:5000"
));