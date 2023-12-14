//export da biblioteca
const Process = require('../models/Caixa');
//get
exports.get = async (req, res) => {
  try {
    const process = await Process.findAll();
    res.json(process);
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
        await Process.create({
         Number,
         CaixaType,
         MatriculaColaborador,
         Colaborador,
         Item,
         QuantidadeIntem,
      });
        res.status(201).json({ message: 'Process register successfully' });
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
     
     await Process.update({ 
      Number,
      CaixaType,
      MatriculaColaborador,
      Colaborador,
      Item,
      QuantidadeIntem
     }, { where: { id:caixa_id} });
      res.status(200).json({ message: 'Process updated successfully' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
};

//Delete
exports.delete = async(req,res) => {
const {process_id} = req.params;
const { name, process, processType, estagiario, teacher, beginningDate,
  tribunal, partesEvolvidas, instâncias, vara, description} = req.body;
  try { await Process.destroy({ where: { id: process_id } });
    res.status(202).json({ message: 'Process deleted successfully' });}
  catch (error) {
      console.error(error);
      res.status(501).json({ message: 'Internal server error' });
  }
}