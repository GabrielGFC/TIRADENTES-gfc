const {Sequelize, DataTypes, INTEGER, STRING } = require('sequelize');
const sequelize = require('../config/database');

const Caixa =sequelize.define('Caixa', {
 
    Number:{
        type: INTEGER(3),//Formato xxx
        allowNull:false,
        unique : true,
        validate:{len:[1,3]},
        primaryKey: true,

    },
    //PRECISO DE MAIS INFORMAÇÕES SOBRE O TIPO DE CAIXA
    // familia = caixatype
    CaixaType:{
        type: STRING(50),
        allowNull: false,
        validate:{len:[1,50]}
    },
    MatriculaColaborador: {
        type: INTEGER(7),
        allowNull: false,
        validate:{len:[1,7]}
    },
    Colaborador: {
        type: STRING(128),
        allowNull: false,
        validate:{len:[1,128]}
    },
    Item: {
        type: STRING(128),
        allowNull: false,
        validate:{len:[1,128]}
    },
    QuantidadeIntem: {
        type: INTEGER(3),
        allowNull: false,
        validate:{len:[1,3]}
    },
    descricoes: {
        type: STRING(128),
        allowNull: false,
        validate:{len:[1,128]}
    }

});


module.exports = Caixa;