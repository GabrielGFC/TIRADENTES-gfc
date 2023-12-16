//export da biblioteca
const Estoque = require('../models/Estoque');

//get
exports.get = async (req, res) => {
  try {
    const estoque = await Estoque.findAll();
    res.json(estoque);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar estoque.' });
  }
};
//post
exports.register = async (req, res) => {
  const {
    numeroCaixa,
    quantidade,
    familia,
    colaborador  
  } = req.body;

  try {
    let 
    numeroCaixaStr = numeroCaixa.toString()
    quantidadeStr = quantidade.toString()

  if (numeroCaixa && numeroCaixaStr.length <= 3)
  {}
  else {return res.status(401).json({ message: 'Número da caixa não preenchido ou inválido', numeroCaixaStr });}
  
  if(quantidade && quantidadeStr.length <= 3)
  {}
  else {return res.status(401).json({ message: 'Data de entrada não preenchida ou inválida' });}

  if (familia && familia.length > 1 && familia.length < 128)
  {}
  else {return res.status(401).json({ message: 'Família não preenchida ou inválida' });}

  if (colaborador && colaborador.length > 1 && colaborador.length < 128)
  {}
  else {return res.status(401).json({ message: 'Colaborador não preenchido ou inválido' });}
  
  await Estoque.create({
    numeroCaixa,
    quantidade,
    familia,
    colaborador
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
    numeroCaixa,
    quantidade,
    familia,
    colaborador
  } = req.body;

  try {let 
    numeroCaixaStr = numeroCaixa.toString()
    quantidadeStr = quantidade.toString()

  if (numeroCaixa && numeroCaixaStr.length <= 3)
  {}
  else {return res.status(401).json({ message: 'Número da caixa não preenchido ou inválido', numeroCaixaStr });}
  
  if(quantidade && quantidadeStr.length <= 3)
  {}
  else {return res.status(401).json({ message: 'Quantidade não preenchida ou inválida'});;}

  if (familia && familia.length > 1 && familia.length < 128)
  {}
  else {return res.status(401).json({ message: 'Família não preenchida ou inválida' });}

  if (colaborador && colaborador.length >= 1 && colaborador.length < 128)
  {}
  else {return res.status(401).json({ message: 'Colaborador não preenchido ou inválido' });}

    await Estoque.update({ 
    numeroCaixa,
    quantidade,
    familia,
    colaborador
    },
  
    { where: { id: estoque_id } });
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
        await Estoque.destroy({ where: { id: estoque_id } });

        res.status(200).json({ message: 'Estoques deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};