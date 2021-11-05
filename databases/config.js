const mongoose = require('mongoose');


const dbConnection = async() => {

    try {
        
        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Base de datos conectada...');

    } catch (error) {
        console.log(error);
        throw new Error('Error al momento de inicializar la base de datos');
    }

};


module.exports = {
    dbConnection
};