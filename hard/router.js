const datos= require('./src/index');
const frecuentes= require('./data/faqs.json');
let pYr= frecuentes.faqs;

// console.log();


// El sistema de ruteo de la aplicación deberá generarse en un archivo llamado
// router.js​.
let rutas={
 opciones: (req)=>{
     switch(req){
           case "/":
               $variable ='Hola';
               break;
           case "/en-cartelera":
                $variable ='en-cartelera';
                 break;
           case "/mas-votadas":
                 $variable ='mas votadas';
                 break;
           case "/preguntasFrecuentes":
                 $variable =`${datos.preguntasFrecuentes.titulo}\n\n${datos.preguntasFrecuentes.totalPreguntas}\n\n${datos.preguntasFrecuentes.listado(pYr)}`;
                 break;
           case "/sucursales":
                 $variable ='sucu';
                break;
           case "/contacto":
                 $variable =datos.contacto.titulo + '\n\n' + datos.contacto.descripcion;
                 break;
           default:
                 $variable='404 not found';
   }
   return $variable;
 },
}

module.exports= rutas;