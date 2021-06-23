/**
 *      /api/clientes
 */

 const { Router } = require('express');
const { check } = require('express-validator');
//  const { check } = require('express-validator'); 
//  const { validarCampos } = require('../middlewares/validar-campos');
 // const { validarJWT } = require('../middlewares/validar-jwt');
 // check es un middleware, uno puede crear uno personalizado
 
 
 const { getCLientes, crearCliente } = require('../controllers/clientes.controller');
const { validarCampos } = require('../middlewares/validar-campos');
 const router = Router();
 
 router.get('/', getCLientes);
 router.post('/', [
                    check('NombreCliente', 'El nombre es obligatorio').not().isEmpty(),
                    check('Direccion', 'La direccion es obligatoria').not().isEmpty(),
                    check('CorreoElectronico', 'el mail es obligatoria').isEmail(),
                    validarCampos
                ]
                , crearCliente );
 
 
 module.exports = router;