const sequelize = require('../config/database');
const Cargo = require('../models/Cargo');
const Item = require('../models/Item');
const Familia = require('../models/Familia');
const User = require('../models/User');
const registrosIniciais = async () => {
    try {
        // Sincroniza o banco de dados sem forçar a recriação do esquema
        await sequelize.sync();

        // Verifica se os registros já existem
        const adminCargo = await Cargo.findOne({ where: { cargos: 'admin' } });
        const alunoCargo = await Cargo.findOne({ where: { cargos: 'aluno' } });
        const colaboradoresCargo = await Cargo.findOne({ where: { cargos: 'colaboradores' } });
        const adminLogin = await User.findOne({ where: { matricula: 1010101, } });
        const alunoLogin = await User.findOne({ where: { matricula: 7654321 } });
        const colaboradorLogin = await User.findOne({ where: { matricula: 1234567} });
        const item = await Item.findOne({ where: { id: 1 } });
        const familia = await Familia.findOne({ where: { id: 1 } });
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

        if (!item) {
            await Item.create({ id: 1, nome: 'pokemon', quantidade: 2, descricao: 'oi' });
        }

        if (!familia) {
            await Familia.create({ id: 1, nome: 'opa', descricao: 'vish'});
        }
       
        if (!adminLogin) {
            await User.create({ matricula: 1010101, senha: 'admin', email: 'admin@gmail.com', nome: 'Admin', periodo: 0, idcargo: 1 });
        }

        if (!alunoLogin) {
            await User.create({ matricula: 7654321, senha: 'aluno', email: 'aluno@gmail.com', nome: 'Aluno', periodo: 1, idcargo: 2 });
        }

        if (!colaboradorLogin) {
            await User.create({ matricula: 1234567, senha: 'colaborador', email: 'colaborador@gmail.com', nome: 'Colaborador', periodo: 2, idcargo: 3});
        }

        console.log('Registros iniciais criados com sucesso!');
    } catch (error) {
        console.error('Erro ao criar registros iniciais:', error);
    }
};
module.exports = registrosIniciais