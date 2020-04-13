
let puntajes=
{
     mayorPuntaje:    function(arrays){
                                             let pelisMasVotadas='';
                                                   for(datos in arrays){
                                                                           if(arrays[datos].vote_average >= 7)
                                                                           {
                                                                                pelisMasVotadas++;
                                                                           };
                                                                       }
                                             return pelisMasVotadas;
                                      },

     promedio:           function(arrays){
                                              let contador= 0,
                                                   lomasVotado = 0,
                                                   dividiendo;
                                                  for(datos in arrays){

                                                                           //console.log(typeof arrays[datos].vote_average);
                                                                            if(arrays[datos].vote_average >= 7)
                                                                            {
                                                                                contador += arrays[datos].vote_average;
                                                                                 lomasVotado++;
                                                                            };
                                                                      }
                                               dividiendo= contador / lomasVotado;
                                               dividiendo= dividiendo.toFixed(2);
                                               //var conDecimal = numero.toFixed(2);
                                                return dividiendo;
     //console.log(lomasVotado);
                                         },
     peliculas:         function(arrays){
          let pelis= '\n';
          for(filtro in arrays){
               
                         if(arrays[filtro].vote_average >= 7){
                                            pelis += "Titulo: "+ arrays[filtro].title + ". \n\nRating: " + arrays[filtro].vote_average +". \n\nSu reseña : " + arrays[filtro].overview;
                                                                                      // let orden='\n';
                                             // for(datos in pelis){
                                            //  orden += pelis[datos] + '\n';
                                             //}
                                             //return orden;
                         }
          } 
          return pelis;
     },
}





module.exports= puntajes;