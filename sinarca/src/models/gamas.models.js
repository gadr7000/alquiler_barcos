//Dependencias requeridas
const mongoose = require ("mongoose");
var Schema = mongoose.Schema;
//Generamos el esquema de las bases de datos
var GamasSchema = Schema({
    
        nombregama: String,
        descrpciongama: String
    
})
//Se exporta de modulo donde se encuentran el esquema
module.exports = mongoose.model("Gamas", GamasSchema);