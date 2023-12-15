//export da biblioteca
const Caixa = require('../models/Caixa');
const Familia = require('../models/Familia');
const Item = require('../models/Item');
//get
exports.get = async (req, res) => {
  try {
    const caixa = await Caixa.findAll({
      include: [
      { model: Familia, attributes: ['nome', 'descricao'] },
      { model: Item, attributes: ['nome', 'quantidade', 'descricao'] }]
    }
    );
    res.json(caixa);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro servidor.' });
  }
};
//post
exports.register = async (req, res) => {
  const {
    idCaixa,
    idItem,
    idFamilia,
    // idColaborador
    } = req.body;
    try {
      let idCaixaStr = idCaixa.toString()

  if (idCaixa && idCaixaStr.length <= 3)
  {}
  else {return res.status(401).json({ message: 'Número da caixa não preenchido ou inválido' });}
  
  await Caixa.create({
    idCaixa,
    idItem,
    idFamilia,
    // idColaborador
});
        res.status(201).json({ message: 'Caixa register successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
    };
//put
exports.update = async (req, res) => {
  const { caixa_id } = req.params;
  const {
    idCaixa,
    idItem,
    idFamilia,
    // idColaborador
    } = req.body;
  try {
    let idCaixaStr = idCaixa.toString()

    if (idCaixa && idCaixaStr.length <= 3)
    {}
    else {return res.status(401).json({ message: 'Número da caixa não preenchido ou inválido' });}

     await Caixa.update({ 
      idCaixa,
      idItem,
      idFamilia,
      // idColaborador
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