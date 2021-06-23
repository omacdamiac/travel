const { response } = require('express');
// const bcryptjs = require('bcryptjs');

const Cliente = require('../models/cliente.models');
// const { generarJWT } = require('../helpers/jwt');

const getCLientes = async(req, res) =>{

    const desde = Number(req.query.desde) || 0;

    //const usuarios = await Usuario.find({}, 'nombre email rol google');
    // promesas simultaneas
    const [ clientes, total ] = await Promise.all([
        Cliente
            .find({}, 'IdCliente NombreCliente Direccion CorreoElectronico Telefonos LineaCredito Promotor Morosidad')
            .skip( desde )
            .limit( 5 ),

            Cliente.count()

    ]);
    
    res.json({
        ok: true,
        clientes: clientes,
        total: total
    })
}

const crearCliente = async(req, res = response) =>{
    
    var status = '';
    var alert = '';
    var response = '';
  
    try {
            const cliente = new Cliente(req.body);

            //encriptar contrase;a
            const salt = bcryptjs.genSaltSync();
            usuario.password = bcryptjs.hashSync( password, salt);

            // guarda usuario
            await usuario.save();

            status = 'success';
            alert = 'Cliente registrado';
            response = { 'cliente' : cliente };
        
        
    } catch (error) {
        console.log(error);
        status = 'error';
        alert = error;
    }finally{
        res.json({
            status: status,
            alert: alert,
            response: response
        })
    }
    
}


module.exports = {
    getCLientes,
    crearCliente
}