let salas={
     totalSalas: function(arrays){return arrays.length},
     nuestrasSalas: function(arrays){
          let salas= '\n';
          for(datos in arrays){
               salas += `Nombre: ${arrays[datos].name}.\n\nDirección: ${arrays[datos].address}.\n\nDescripción: ${arrays[datos].description}.\n\nRooms: ${arrays[datos].total_rooms}.\n\n` ;
          }
          return salas;
          
     }
}

//console.log(salas.salas(theaters));

module.exports= salas;