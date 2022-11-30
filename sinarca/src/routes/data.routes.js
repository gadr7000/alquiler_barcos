const { Router } = require('express');
const router = Router();
const { renderData, addData} = require('../controllers/data.controller');

//API para la data

router.get('/api/v1/all-data', renderData);

// Metodo Post

router.post('/api/v1/add-data', addData);

//Solo se exporta el modulo de las rutas S

module.exports = router;