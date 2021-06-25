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
            .find({}, 'IdCliente NombreCliente Direccion RequiereComisionista CorreoElectronico AerolineasConConvenio Telefonos LimiteDeCredito ClasificacionNivel2 EsEmpresaDelGrupo IdEmpresa PermiteEmisionConTarjeta SoloEmitirFacturaAgencia IdGrupo Promotor CondicionPago TipoCliente Documento Morosidad LineaCredito EsGoldenLine AutorizaEmisionConFComisionPendiente MontoMaximoMorosidad idSucursal idPtoVenta')
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

        // guarda cliente
        await cliente.save();
        console.log(req.body);
        console.log(cliente);

        status = 'success';
        alert = 'Cliente registrado';
        response = { 'cliente' : cliente };
    } catch (error) {
        console.log(error);
        status = 'error';
        alert = error;
    } finally {
        res.json({
            status: status,
            alert: alert,
            response: response
        })
    }
}

const borrarCliente = async(req, res = response) =>{
    
    var status = '';
    var alert = '';
    var response = '';
  
    try {

        // validar si el usuario es el de la sesion
        const uid = req.params.id;

        const clienteDB = await Cliente.findById( uid );

        if ( !clienteDB ){

            status = 'error';
            alert = 'Cliente no existe';

        }else{

            await Cliente.findOneAndDelete( uid );

            status = 'success';
            alert = 'Cliente eliminado';
            
        }
        
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
    crearCliente,
    borrarCliente
}