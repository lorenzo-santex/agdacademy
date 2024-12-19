const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql'
    }
);

const connectDB = sequelize.authenticate().then( () => {
    console.log('conectado');
    
}).catch((error) => {
    console.error('no conectado');
});

module.exports = { sequelize, connectDB} ;