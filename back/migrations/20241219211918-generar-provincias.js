'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let provinciasDatos = [
      { "code": "CAB", "name": "Capital Federal" },
      { "code": "BSA", "name": "Buenos Aires" },
      { "code": "CAT", "name": "Catamarca" },
      { "code": "COR", "name": "Córdoba" },
      { "code": "CRR", "name": "Corrientes" },
      { "code": "CHA", "name": "Chaco" },
      { "code": "CHU", "name": "Chubut" },
      { "code": "ENT", "name": "Entre Ríos" },
      { "code": "FOR", "name": "Formosa" },
      { "code": "JUJ", "name": "Jujuy" },
      { "code": "PAM", "name": "La Pampa" },
      { "code": "RIO", "name": "La Rioja" },
      { "code": "MEN", "name": "Mendoza" },
      { "code": "MIS", "name": "Misiones" },
      { "code": "NEU", "name": "Neuquén" },
      { "code": "RNE", "name": "Río Negro" },
      { "code": "SAL", "name": "Salta" },
      { "code": "SJU", "name": "San Juan" },
      { "code": "SLU", "name": "San Luis" },
      { "code": "SCR", "name": "Santa Cruz" },
      { "code": "SFE", "name": "Santa Fe" },
      { "code": "SDE", "name": "Santiago del Estero" },
      { "code": "TDF", "name": "Tierra del Fuego" },
      { "code": "TUC", "name": "Tucumán" }
  ];
  console.log(provinciasDatos);

  console.log('=====');
  let id = 1;
  provinciasDatos.forEach((provincia) => {
      provincia.id = id++;
  });
  console.log('=====');
  console.log(provinciasDatos);

  await queryInterface.bulkInsert('Provincia', provinciasDatos, {} );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Provincia');
  }
};
