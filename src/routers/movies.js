const express = require ('express');
const router = express.Router();

router.get('/movies', (req, res) => {
    res.json ({ mensaje:'Hi desde la ruta peliculas '});
    res.json(__dirname + 'peliculas.json')
});

// router.get('movies/:id', (req, res)=>{
//     res.json(__dirname + 'peliculas.json');
//     if id === idmovies {

//     }
//     res.send('peliculaBuscada')
// })
module.exports = router