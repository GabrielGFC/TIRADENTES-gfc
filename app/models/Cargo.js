const { Sequelize, DataTypes, STRING } = require('sequelize');
const sequelize = require('../config/database');

const Cargo = sequelize.define('cargo', {

    cargos: {
        type: STRING(11),
        allowNull: false,
        primaryKey: true,
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

const registrosIniciais = async () => {
    try {
        // Sincroniza o banco de dados sem forçar a recriação do esquema
        await sequelize.sync();

        // Verifica se os registros já existem
        const adminCargo = await Cargo.findOne({ where: { cargos: 'admin' } });
        const alunoCargo = await Cargo.findOne({ where: { cargos: 'aluno' } });
        const colaboradoresCargo = await Cargo.findOne({ where: { cargos: 'colaboradores' } });

        // Cria registros se não existirem
        if (!adminCargo) {
            await Cargo.create({ cargos: 'admin' });
        }

        if (!alunoCargo) {
            await Cargo.create({ cargos: 'aluno' });
        }

        if (!colaboradoresCargo) {
            await Cargo.create({ cargos: 'colaboradores' });
        }

        console.log('Registros iniciais criados com sucesso!');
    } catch (error) {
        console.error('Erro ao criar registros iniciais:', error);
    }
};

// Chama a função para criar os registros após a sincronização
registrosIniciais();

module.exports = Cargo;
