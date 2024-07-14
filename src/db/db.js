

const mysql = require ('mysql2');
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: 'root',
     
});

connection.connect((err) => {
    if (err){
        console.err('Error connecting to the database:', err);
    }
    console.log('Connected to the database.');
   
    connection.query('CREATE DATABASE IF NOT EXISTS MOVIES_DB', (err,results)=> {
        if (err) {
            console.error('Error creating database:', err);
            return;
        }
       
        console.log('Database ensure.');
       
        connection.changeUser({ database: 'movies' }, (err) => {
            if (err){
                console.error('Error switching o movies_db:', erro);
                return;
            }        
            const createTableQuery =  `
            CREATE TABLE IF NOT EXISTS movies (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                director VARCHAR(255) NOT NULL,
                year INT NOT NULL
            ); 
          `;  
          
          connection.query(createTableQuery, (err, results) => {
            if (err) {
                console.error('Error creating table:', err);
                return;
            }
            console.log('Table ensured. - Crea la tabla en movies');
        });
        }); 
    
    });
});

     

module.exports = connection;