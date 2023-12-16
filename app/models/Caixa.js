const {Sequelize, DataTypes, INTEGER, STRING } = require('sequelize');
const sequelize = require('../config/database');
const Familia = require('./Familia');
const Item = require('./Item');
const User = require('./User');

const Caixa =sequelize.define('Caixa', {
 
    idCaixa:{
        type: INTEGER(3),//Formato xxx
        allowNull:false,
        unique : true,
        primaryKey: true,
        autoIncrement: true
    },
})

Caixa.belongsTo(Item,{
    foreignKey: 'idItem'
})


Caixa.belongsTo(Familia, {
    foreignKey: 'idFamilia'
}),

Caixa.belongsTo(User,{
    foreignKey: 'matricula'
})

module.exports = Caixa;