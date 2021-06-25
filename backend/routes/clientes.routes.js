/**
 *      /api/clientes
 */
    const { Router } = require('express');
    const { check } = require('express-validator');
    //  const { check } = require('express-validator'); 
    //  const { validarCampos } = require('../middlewares/validar-campos');
    // const { validarJWT } = require('../middlewares/validar-jwt');
    // check es un middleware, uno puede crear uno personalizado
 
 
    const { getCLientes, crearCliente, borrarCliente } = require('../controllers/clientes.controller');
    const router = Router();

    router.get('/', getCLientes);
    router.post('/', crearCliente );
    router.delete('/:id', borrarCliente );


    module.exports = router;