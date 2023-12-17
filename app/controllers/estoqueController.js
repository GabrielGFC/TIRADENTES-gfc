//export da biblioteca
const Caixa = require('../models/Caixa');
const Estoque = require('../models/Estoque');

//get
exports.get = async (req, res) => {
  try {
    const estoque = await Estoque.findAll({
      include: 
      { model: Caixa, attributes: ['idCaixa', 'idFamilia', 'idItem'] },
    });
    res.json(estoque);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar estoque.' });
  }
};
//post
exports.register = async (req, res) => {
  const {
    idCaixa,
  } = req.body;

  try {
    let
    idCaixaStr = idCaixa.toString();
    
  if (idCaixa && idCaixaStr.length <= 3)
  {}
  else {return res.status(401).json({ message: 'Número da caixa não preenchido ou inválido'});}
  
  await Estoque.create({
    idCaixa
    });
    res.status(201).json({ message: 'Estoque register successfully'});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

//put
exports.update = async (req, res) => {
  const { estoque_id } = req.params;
  const { 
   idCaixa
  } = req.body;

  try {
    let
    idCaixaStr = idCaixa.toString();
    
  if (idCaixa && idCaixaStr.length <= 3)
  {}
  else {return res.status(401).json({ message: 'Número da caixa não preenchido ou inválido' });}

    await Estoque.update({ 
    idCaixa
    },
  
    { where: { idEstoque: estoque_id } });
    res.status(200).json({ message: 'Estoques updated successfully' });

  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
};

//delete
exports.delete = async (req, res) => {
    const { estoque_id } = req.params;
    try {
        await Estoque.destroy({ where: { idEstoque: estoque_id } });

        res.status(200).json({ message: 'Estoques deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};