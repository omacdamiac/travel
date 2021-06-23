const { Schema, model }= require('mongoose');

const ClienteSchema = Schema({

    IdCliente:{
        type: String,
    },
    NombreCliente:{
        type: String,
    },
    Direccion:{
        type: String,
    },
    CorreoElectronico:{
        type: String,
    },
    Promotor:{
        type: Array,
    },
    Telefonos:{
        type: Array,
    },
    LineaCredito:{
        type: Array,
    },
    Morosidad: {
        type: Array,
    }
});


// ocultamos los valores que no quieren que se retornen
// ClienteSchema.method('toJSON', function(){
//     const { __v, _id, password, ...Object } = this.toObject();
//     Object.uid = _id;
//     return Object
// });

module.exports = model( 'Cliente', ClienteSchema );