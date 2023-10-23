//export da biblioteca
const User = require('../models/User');
const bcrypt = require("bcrypt")
//get
exports.get = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar usuários.' });
  }
};
//post
exports.register = async (req, res) => {
  const { 
    cpf,
     password, 
     nameComplete, 
     rg, 
     telefone, 
     dataNascimento, 
     profissao,estadoCivil, 
     sexo, 
     email, 
     mae, 
     pai, 
     paisOrigem, 
     cep, 
     logradouro, 
     numero, 
     complemento, 
     bairro, 
     cidade, 
     estado 
    } = req.body;

  try {
      const hashedPassword = bcrypt.hashSync(password, 10);
      const hashedcep = bcrypt.hashSync(cep, 10);
      const hashedlogradouro = bcrypt.hashSync(logradouro, 10);
      const hashednumero = bcrypt.hashSync(numero, 10);
      const hashedcomplemento = bcrypt.hashSync(complemento, 10);
      const hashedbairro = bcrypt.hashSync(bairro, 10);
      const hashedcidade = bcrypt.hashSync(cidade, 10);
      const hashedestado = bcrypt.hashSync(estado, 10);
      await User.create({ 
        cpf, 
        password: hashedPassword, 
        nameComplete, 
        rg,
        telefone,
        dataNascimento, 
        profissao,
        estadoCivil,
        sexo, 
        email, 
        mae, 
        pai, 
        paisOrigem, 
        cep: hashedcep,
        logradouro: hashedlogradouro, 
        numero: hashednumero, 
        complemento: hashedcomplemento, 
        bairro: hashedbairro, 
        cidade: hashedcidade, 
        estado : hashedestado
      });
      res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
};
//put
exports.update = async (req, res) => {
  const { user_id } = req.params;
  const { 
     cpf, 
     password, 
     nameComplete, 
     rg, 
     telefone, 
     dataNascimento, 
     profissao, 
     estadoCivil, 
     sexo, 
     email, 
     mae, 
     pai, 
     paisOrigem, 
     cep, 
     logradouro, 
     numero, 
     complemento, 
     bairro, 
     cidade, 
     estado 
    } = req.body;

  try {
      const hashedPassword = bcrypt.hashSync(password, 10);
      const hashedcep = bcrypt.hashSync(cep, 10);
      const hashedlogradouro = bcrypt.hashSync(logradouro, 10);
      const hashednumero = bcrypt.hashSync(numero, 10);
      const hashedcomplemento = bcrypt.hashSync(complemento, 10);
      const hashedbairro = bcrypt.hashSync(bairro, 10);
      const hashedcidade = bcrypt.hashSync(cidade, 10);
      const hashedestado = bcrypt.hashSync(estado, 10)
      await User.update({ 
        cpf, 
        password: hashedPassword, 
        nameComplete, 
        rg,
        telefone,
        dataNascimento, 
        profissao,
        estadoCivil,
        sexo, 
        email, 
        mae, 
        pai, 
        paisOrigem, 
        cep: hashedcep,
        logradouro: hashedlogradouro, 
        numero: hashednumero, 
        complemento: hashedcomplemento, 
        bairro: hashedbairro, 
        cidade: hashedcidade, 
        estado : hashedestado
        },
        { where: { id: user_id } 
  });
    res.status(200).json({ message: 'User updated successfully' });
      } 
      catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
}

//delete
exports.delete = async (req, res) => {
    const { user_id } = req.params;
    try {
        await User.destroy({ where: { id: user_id } });

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
