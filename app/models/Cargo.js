const { Sequelize, DataTypes, STRING } = require('sequelize');
const sequelize = require('../config/database');

const cargo = sequelize.define('cargo', {
    cargos: {
        type: STRING(11),
        allowNull: false,
        primaryKey: true,
        unique: true,
    }
});

sequelize.sync({ force: true })
    .then(() => {
        return cargo.create({
            cargos: 'admin',
        });
    });
sequelize.sync({ force: true })
    .then(() => {
        return cargo.create({
            cargos: 'aluno',
        });
    });
sequelize.sync({ force: true })
    .then(() => {
        return cargo.create({
            cargos: 'colaboradores',
        });
    });

module.exports = cargo;
