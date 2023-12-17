const sequelize = require('../config/database');
const Cargo = require('../models/Cargo');
const Item = require('../models/Item');
const Familia = require('../models/Familia');
const User = require('../models/User');
const Caixa = require('../models/Caixa');
const Pedido = require('../models/Pedido');
const Estoque = require('../models/Estoque');
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
        const caixa = await Caixa.findOne({ where: { idCaixa: 1 } });
        const pedido = await Pedido.findOne({ where: { idPedido: 1 } });
        const estoque = await Estoque.findOne({ where: { idEstoque: 1 } });
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
            await Item.create({ id: 1, nome: 'Bisturi', quantidade: 2, descricao: 'O bisturi é uma ferramenta cirúrgica de lâmina afiada e pontiaguda, utilizada para realizar incisões precisas em tecidos durante procedimentos cirúrgicos' });
        }

        if (!familia) {
            await Familia.create({ id: 1, nome: 'Cirúrgica', descricao: 'Itens usados para cirurgia'});
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

        if (!caixa) {
            await Caixa.create({ idItem: 1, idFamilia: 1, matricula: 1234567});
        }

        if (!pedido) {
            await Pedido.create({ aprovacao: 1, idCaixa: 1, matricula: 7654321});
        }

        if (!estoque) {
            await Estoque.create({ idCaixa: 1});
        }

        console.log('Registros iniciais criados com sucesso!');
    } catch (error) {
        console.error('Erro ao criar registros iniciais:', error);
    }
};
module.exports = registrosIniciais