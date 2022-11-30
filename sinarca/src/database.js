
//Realiza la conexión con las bases de datos para el caso local 
const mongoose = require('mongoose');
const {NOTES_APP_MONGODB_HOST,NOTES_APP_MONGODB_DATABASE} = process.env;
const MONGODB_URI = 'mongodb://127.0.0.1:27017/sinarca'

mongoose.connect(MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Que Crack esta conectada la base de datos'))
    .catch(err => console.log("Algo paso calidad NO se esta conectando la DB"+err));