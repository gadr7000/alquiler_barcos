const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');


//Inicio

const app = express();

/*
***Configuran los puertos para Express recomendado el 8000

Conofiguracion para que cargue la carpeta de las vista 
app.engine('.hbs',exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs'
}));

app.set('view engine', '.hbs');





*/


app.set('port', process.env.PORT || 8000);
app.set('views', path.join(__dirname, 'views'));


//Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use(methodOverride('_method'));

//requrimiento de las tutas

//Routes

app.use(require('./routes/index.routes'));
app.use(require('./routes/data.routes'));

//Archivos estaticos

app.use(express.static(path.join(__dirname, '/public')));


module.exports = app;