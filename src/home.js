
 let herramientas = {
     titulo:    `Bienvenidos a DH Movies, el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuenvana y PopCorn.`,
     peliculas: function(arrays){
                    let pelis;
                    pelis= arrays.map(array=> array.title);
                    pelis.sort();
                    return pelis;
                },
    // anclas: document.write("<a href=\"http://localhost:3030/en-cartelera;\"> En Cartelera </a>"),

}

module.exports = herramientas;
