const { Sequelize, DataTypes, STRING } = require('sequelize');
const sequelize = require('../config/database');
const Item = require('./Item');
const Familia = require('./Familia');

const Cargo = sequelize.define('cargo', {

    cargos: {
        type: STRING(11),
        allowNull: false,
        unique: true,
    }
});

// sequelize.sync({ force: true })
//     .then(() => {
//         return Cargo.create({
//             cargos: 'admin',
//         });
//     });
// sequelize.sync({ force: true })
//     .then(() => {
//         return Cargo.create({
//             cargos: 'aluno',
//         });
//     });
// sequelize.sync({ force: true })
//     .then(() => {
//         return Cargo.create({
//             cargos: 'colaboradores',
//         });
    
//     });


module.exports = Cargo;
