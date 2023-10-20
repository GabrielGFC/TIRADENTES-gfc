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
  const { cpf, password, nameComplete, rg, telefone, dataNascimento, profissao,estadoCivil, sexo, email, mae, pai, paisOrigem, cep, logradouro, numero, complemento, bairro, cidade, estado } = req.body;

  try {
      const hashedPassword = bcrypt.hashSync(password, 10);
      await User.create({ cpf, password: hashedPassword, nameComplete, rg,telefone,dataNascimento, profissao,estadoCivil,sexo, email, mae, pai, paisOrigem, cep, logradouro, numero, complemento, bairro, cidade, estado });
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
     cpf, password, nameComplete, rg, telefone, 
     dataNascimento, profissao, estadoCivil, sexo, email, mae, 
     pai, paisOrigem, cep, logradouro, numero, 
     complemento, bairro, cidade, estado } = req.body;

  try {
      const hashedPassword = bcrypt.hashSync(password, 10);
      await User.update({ 
         cpf, password: hashedPassword, nameComplete, rg, telefone,
         dataNascimento, profissao, estadoCivil, sexo, email, mae, pai, 
         paisOrigem, cep, logradouro, numero, complemento, bairro, cidade, estado },
          { where: { id: user_id } });
      res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
}