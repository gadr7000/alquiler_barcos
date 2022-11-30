const { json } = require('body-parser');
const {Schema, model} = require('mongoose');

// Realiza la configuracion del esquema de la base de datos para este caso Mongo DB Este es solo un ejemplo
const DataSchema = new Schema({
   
} ,{
        timestamps: true
});
// JSON(no requerido)

module.exports = model('Data', DataSchema);