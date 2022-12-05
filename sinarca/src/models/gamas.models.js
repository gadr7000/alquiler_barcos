const mongoose = require ("mongoose");
var Schema = mongoose.Schema;

var GamasSchema = Schema({
    
        nombregama: String,
        descrpciongama: String
        
    
    
})

module.exports = mongoose.model("Gamas", GamasSchema);