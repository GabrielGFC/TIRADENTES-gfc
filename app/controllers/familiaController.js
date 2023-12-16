const familia = require('../models/familia.js');

exports.get = async (req, res) => {
  try {
    const familias = await familia.findAll();
    res.json(familias);
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: 'Erro servidor.' });
  }
}
//post
exports.register = async (req, res) => {
  const {
  nome,
  descricao,
  } = req.body;
  try {
    await familia.create({
    nome,
    descricao,
    });
    res.status(201).json({ message: 'familia register successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

exports.update = async (req, res) => {
    const { familia_id } = req.params;
    const {
      nome,
      descricao,
    } = req.body;
    try {
        await familia.update(
        {
          nome,
          descricao,
        },
        { where: { id: familia_id } }
        );
        res.status(200).json({ message: 'familia updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
    };

    exports.delete = async (req, res) => {
        const { familia_id } = req.params;
        try {
            await familia.destroy({ where: { id: familia_id } });
            res.status(200).json({ message: 'familia deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    };