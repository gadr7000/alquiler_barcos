const Gamas = require("../models/gamas.models");
var controllerGama = {
    guardarGama:function(req,res){
    let gama = new Gamas();
    gama.nombregama = req.body.nombregama;
    gama.descrpciongama = req.body.descrpciongama;

    gama.save((err, gamaStored) => {
        


        return res.status(200).send({
            
            gama: gamaStored
       
      });if (err) res.status(500).send({message: 'Error al guardar en la DB: ${err}'})

      
    }   
    )},

    VerGamas:function(req,res){
        Gamas.find(function(err,doc){
            console.log(doc);
            return res.status(200).send({
                message:"Listado de Gamas",
                doc
            });
        })
       
    }



}

module.exports = controllerGama;