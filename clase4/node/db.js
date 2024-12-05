const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'provincias',
    'root',
    'root',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

sequelize.authenticate().then( () => {
    console.log('conectado')
}).catch((error) => {
    console.error('no conectado');
});

module.exports = sequelize;