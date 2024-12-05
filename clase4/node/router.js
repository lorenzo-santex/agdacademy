const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Listado de provincias');
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Detalles de la provincia ${id}`);
});

module.exports = router;