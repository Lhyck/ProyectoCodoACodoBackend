create database movies;
use movies;

create table registro(
id_register int primary key,
nombre_id varchar(50) not null,
apellido_id varchar(50) not null,
email_id varchar(100) not null,
passwork_id varchar(20) not null,
fechaDeNacimiento_id date not null,
pais_id varchar(20) not null,
fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE peliculas (
    id_pelicula INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    descripcion TEXT,
    fecha_lanzamiento DATE,
    director VARCHAR(100)
);

CREATE TABLE categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre_categoria VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE peliculas_categorias (
    id_pelicula INT,
    id_categoria INT,
    FOREIGN KEY (id_pelicula) REFERENCES peliculas(id_pelicula),
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria),
    PRIMARY KEY (id_pelicula, id_categoria)
);
