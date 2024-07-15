const db = require ('../db/db');

const getAllMovies = (req, res) => {
    const sql = 'SELECT = FROM peliculas';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json (results);
    });
};


const getMovieById = (req, res) => {
    const { id_pelicula } = req.params;
    const sql = 'SELECT * FROM peliculas WHERE id_pelicula = ?';
    db.query(sql, [id_pelicula], (err, result) => {
        if (err) throw err;
        res.json({message: 'Estado actual de los resultados'});
    });
};


const deleteMovie = (req, res ) => {
    db.query(sql, [id],(err, result) =>{

    });
};

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
};