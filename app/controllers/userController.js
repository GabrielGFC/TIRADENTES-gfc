//export da biblioteca
const User = require('../models/User');
const bcrypt = require("bcrypt");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
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
    matricula,
    senha,
    email,
    nome,
    periodo,
    idCargo  
  } = req.body;

  try {

    let 
    hashedSenha
    matriculaStr = matricula.toString()
    periodoStr = periodo.toString()

  if (matricula && matriculaStr.length == 7)
  {}
  else {return res.status(401).json({ message: 'Matrícula não preenchida ou inválida' });}
  
  if(senha && senha.length > 1 && senha.length < 128)
  {hashedSenha = bcrypt.hashSync(senha, salt);}
  else {return res.status(401).json({ message: 'Senha não preenchida ou inválida'});;}
  
  if (email && email.length > 1 && email.length < 128)
  {}
  else {return res.status(401).json({ message: 'E-mail não preenchido ou inválido' });}
  
  if (nome && nome.length > 1 && nome.length < 128)
  {}
  else {return res.status(401).json({ message: 'Nome não preenchido ou inválido' });}

  if (periodo && periodoStr.length <= 2 )
  {}
  else {return res.status(401).json({ message: 'Período não preenchido ou inválido' });}

  if (idCargo && idCargo.length == 1)
  {}
  else {return res.status(401).json({ message: 'Cargo não preenchido ou inválido' });}
  
  await User.create({   
    matricula,
    senha: hashedSenha,
    email,
    nome,
    periodo,
    idCargo,
    });
    res.status(201).json({ message: 'User register successfully'});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

//put
exports.update = async (req, res) => {
  const { user_id } = req.params;
  const {
    matricula,
    senha,
    email,
    nome,
    periodo,
    idCargo  
  } = req.body;

  try {let 
    hashedSenha
    matriculaStr = matricula.toString()
    periodoStr = periodo.toString()

  if (matricula && matriculaStr.length == 7)
  {}
  else {return res.status(401).json({ message: 'Matrícula não preenchida ou inválida', matricula });}
  
  if(senha && senha.length > 1 && senha.length < 128)
  {hashedSenha = bcrypt.hashSync(senha, salt);}
  else {return res.status(401).json({ message: 'Senha não preenchida ou inválida'});;}
  
  if (email && email.length > 1 && email.length < 128)
  {}
  else {return res.status(401).json({ message: 'E-mail não preenchido ou inválido' });}
  
  if (nome && nome.length > 1 && nome.length < 128)
  {}
  else {return res.status(401).json({ message: 'Nome não preenchido ou inválido' });}

  if (periodo && periodoStr.length < 2 )
  {}
  else {return res.status(401).json({ message: 'Período não preenchido ou inválido' });}

  if (idCargo && idCargo.length > 1 && idCargo.length < 128)
  {}
  else {return res.status(401).json({ message: 'Cargo não preenchido ou inválido' });}

    await User.update({
    matricula,
    senha: hashedSenha,
    email,
    nome,
    periodo,
    idCargo,
    },
  
    { where: { id: user_id } });
    res.status(200).json({ message: 'User updated successfully' });

  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
};

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