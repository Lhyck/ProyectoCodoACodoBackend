const db = require ('../db/db');

const getAllMovies = (req, res) => {
    const sql = 'SELECT = FROM peliculas';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.json (results);
    });
};
const getMovieById = (req, res) => {
    
}

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