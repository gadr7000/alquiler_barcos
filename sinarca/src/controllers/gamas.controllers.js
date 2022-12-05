
/*
**
*Dependencias requeridas se igualan a la constante de Gama que implementaremos para instanciar el esquema de las bases de datos
*/
const Gamas = require("../models/gamas.models");
//se declara una variable donde permitirá exportar el módulo de controlador 
var controllerGama = {

    //Función que permite guardar las gamas de los barcos 
    guardarGama:function(req,res){
    // Generamos una nueva variable donde instanciamos con la constante del esquema
    let gama = new Gamas();
    /**
     * La propiedad req.body contiene pares clave-valor de datos enviados en el cuerpo de la solicitud. De forma predeterminada, no está definido y se completa cuando usa un middleware llamado análisis de cuerpo
     */
    gama.nombregama = req.body.nombregama;
    gama.descrpciongama = req.body.descrpciongama;

    gama.save((err, gamaStored) => {
        


        return res.status(200).send({
            
            gama: gamaStored
       
      });

      
    }   
    )},
    // Funcion que permite  Visualizar las gamas
    VerGamas:function(req,res){
        Gamas.find(function(err,doc){
            
            return res.status(200).send({
                message:"Listado de Gamas",
                doc
            });
        })
       
    }



}

module.exports = controllerGama;