const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/', controller.index);
router.get('/allArticulos', controller.articulos);
router.get('/nuevo', controller.nuevo);
router.post('/guardar', controller.guardar);
router.get('/detalle/:id', controller.detalle);
router.get('/editar/:id', controller.editar);
router.delete('/:id', controller.eliminar);
router.put('/:id', controller.editForm);

module.exports = router;