// getting-started.js
const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async() => {

    try {
        mongoose.connect(process.env.DB_TRAVEL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('db online');
    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la base de datos');
    }
}

module.exports = {
    dbConnection
}