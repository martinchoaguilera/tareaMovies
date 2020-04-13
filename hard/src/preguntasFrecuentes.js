let peliculas=require('../data/faqs.json');

//console.log(peliculas.faqs[0]);
// console.log(listado(peliculas.faqs));
// console.log(pYr);


let preguntasFrecuentes={
     titulo:        'Preguntas Frecuentes',
     totalPreguntas: peliculas.total_faqs ,
     listado:        function listado(array){
                                                  preguntitas='\n';
                                                       for(datos in pYr){
                                                                                preguntitas += `${pYr[datos].faq_title}\n${pYr[datos].faq_answer}\n\n`
                                                                        }
                                                  return preguntitas;
                                             },
}
module.exports= preguntasFrecuentes;
//console.log(preguntasFrecuentes.listado(pYr));
