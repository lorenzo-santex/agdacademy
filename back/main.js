const express = require('express');
const cors = require('cors');

require('dotenv').config();

const { connectDB } = require('./db'); 
const provinciasRouter = require('./routers/provinciaRouter');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());


app.use('/provincias', provinciasRouter);


app.listen(PORT, async () => {
    await connectDB;
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});