const express = require('express');
const app = express();
const provinciasRouter = require('./router');
const db = require('./db');

app.use('/provincias', provinciasRouter);

app.listen(3000, () => {
    console.log(`Servidor en el puerto 3000`);
});