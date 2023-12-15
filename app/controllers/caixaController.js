//export da biblioteca
const Caixa = require('../models/Caixa');

//get
exports.get = async (req, res) => {
  try {
    const Caixa = await Caixa.findAll();
    res.json(Caixa);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro servidor.' });
  }
};
//post
exports.register = async (req, res) => {
  const {
    Number,
    CaixaType,
    MatriculaColaborador,
    Colaborador,
    Item,
    QuantidadeIntem,
} = req.body;
    try {
        await Caixa.create({
         Number,
         CaixaType,
         MatriculaColaborador,
         Colaborador,
         Item,
         QuantidadeIntem,
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
    Number,
    CaixaType,
    MatriculaColaborador,
    Colaborador,
    Item,
    QuantidadeIntem,} = req.body;
  try {
     
     await Caixa.update({ 
      Number,
      CaixaType,
      MatriculaColaborador,
      Colaborador,
      Item,
      QuantidadeIntem
     }, { where: { id:caixa_id} });
      res.status(200).json({ message: 'Caixa updated successfully' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
};

//Delete
exports.delete = async (req, res) => {
  const { Number } = req.params;
    try {
      await Caixa.destroy({ where: { id: Number } });
      res.status(202).json({ message: 'Caixa deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(501).json({ message: 'Internal server error' });
    }
  }; // Add a closing curly brace here
