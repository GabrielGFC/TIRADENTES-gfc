//export da biblioteca
const Caixa = require('../models/Caixa');
//get
exports.get = async (req, res) => {
  try {
    const caixa = await Caixa.findAll([
      { model: Familia, attributes: ['nome', 'descricao'] },
      { model: Item, attributes: ['nome', 'quantidade', 'descricao'] }
    ]);
    res.json(caixa);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro servidor.' });
  }
};
//post
exports.register = async (req, res) => {
  const {
    Number,
    idItem,
    idFamilia,
    idColaborador
    } = req.body;
    try {
      let NumberStr = Number.toString()

  if (Number && NumberStr.length <= 3)
  {}
  else {return res.status(401).json({ message: 'Número da caixa não preenchido ou inválido', numeroCaixaStr });}
  
  await Caixa.create({
    Number,
    idItem,
    idFamilia,
    idColaborador
});
        res.status(201).json({ message: 'Cargo register successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
    };
//put
exports.update = async (req, res) => {
  const { caixa_id } = req.params;
  const {
    Number,
    idItem
    } = req.body;
  try {
    let NumberStr = Number.toString()

    if (Number && NumberStr.length <= 3)
    {}
    else {return res.status(401).json({ message: 'Número da caixa não preenchido ou inválido', numeroCaixaStr });}

     await Caixa.update({ 
      Number,
      idItem
    }
      , { where: { id:caixa_id} });
      res.status(200).json({ message: 'Caixa updated successfully' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
};

//Delete
exports.delete = async(req,res) => {
const {caixa_id} = req.params;
const { } = req.body;
  try { await Caixa.destroy({ where: { id: caixa_id } });
    res.status(202).json({ message: 'Caixa deleted successfully' });}
  catch (error) {
      console.error(error);
      res.status(501).json({ message: 'Internal server error' });
  }
}