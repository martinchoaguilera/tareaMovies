

let cartelera={

     activas: function(arrays)
			{
                    let pelis= arrays.map(array=> "Titulo: "+ array.title + ". \nSu reseña : " + array.overview+'\n\n' );
                    return pelis;
				//let orden= [];
//                    for(datos in array)
//				console.log(
//                         `Película: ${array[datos].title}
//Reseña: ${array[datos].overview}`);
				//return orden;
               }
          }  

module.exports= cartelera;

