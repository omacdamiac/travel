const { Schema, model } = require('mongoose');
const ClienteSchema = Schema({
    IdCliente:{ type: Number },
    NombreCliente:{ type: String},
    Direccion:{ type: String },
    RequiereComisionista: {type: Boolean},
    CorreoElectronico:{ type: String },
    AerolineasConConvenio:{ type: String },
    Telefonos:[{
        type: Object,
        require: true
    }],
    LimiteDeCredito:{ type: String },
    ClasificacionNivel2:{ type: String },
    EsEmpresaDelGrupo:{ type: Boolean },
    // IdEmpresa: {type: Number},
    PermiteEmisionConTarjeta:{ type: Boolean },
    SoloEmitirFacturaAgencia:{ type: Boolean },
    IdGrupo: { type: String },
    Promotor:[{
        type: Object,
        require: true
    }],
    CondicionPago:[{
        type: Object,
        require: true
    }],
    TipoCliente:[{
        type: Object,
        require: true
    }],
    Documento:[{
        type: Object,
        require: true
    }],
    Morosidad: [{
        type: Object,
        require: true
    }],
    LineaCredito:[{
        type: Object,
        require: true
    }],
    EsGoldenLine:{ type: Boolean },
    AutorizaEmisionConFComisionPendiente:{ type: Boolean },
    MontoMaximoMorosidad:{ type: Number },
    idSucursal:{ type: Number },
    idPtoVenta:{ type: Number },
});

module.exports = model( 'Cliente', ClienteSchema );