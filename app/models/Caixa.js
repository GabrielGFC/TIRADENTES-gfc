const { Sequelize, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/database');
const Item = require('./Item');
const Familia = require('./Familia');
const User = require('./User');

const Caixa = sequelize.define('Caixa', {
    idCaixa: {
        type: INTEGER(3),
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    },
});

Caixa.belongsTo(Item, {
    foreignKey: 'idItem',
});

Caixa.belongsTo(Familia, {
    foreignKey: 'idFamilia',
});

Caixa.belongsTo(User, {
    foreignKey: 'matricula',
});

module.exports = Caixa;