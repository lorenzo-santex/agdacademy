const express = require('express');
const router = express.Router();

const Provincia = require('../models/provincia');
const Ciudad = require('../models/ciudad');


router.get('/', async (req, res) => {
    //res.send('Listado de provincias');
    const provincias = await Provincia.findAll();
    res.json(provincias);
});

router.get('/:code', async (req, res) => {
    const { code } = req.params;
    const provincia = await Provincia.findOne( { where: {code: code}});
    res.json(provincia);
});


router.post('/:code/ciudades/crear', async (req, res) => {
    const { code } = req.params;
    const provincia = await Provincia.findOne( { where: {code: code}});
    const { name, ciudadCode } = req.body;

    if ( !provincia ) {
        return res.status(404).json({ error: 'Provincia no encontrada' });
    }

    if ( 'CAB' === provincia.code ) {
        return res.status(400).json({ error: 'No se pueden agregar ciudades a Capital Federal' });
    } 

    let  ciudad  = await Ciudad.create({
        parent_id: provincia.id,
        code: ciudadCode,
        name: name
    });

    res.json(ciudad);
});

router.get('/:code/ciudades/', async (req, res) => {
    const { code } = req.params;
    const provincia = await Provincia.findOne( { where: {code: code}});
    const ciudades = await Ciudad.findAll( 
        { 
            where: {parent_id: provincia.id },
            attributes: ['id', 'name', 'code']
        }
    );
    res.json(ciudades);
});

module.exports = router;