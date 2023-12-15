const Familia = require('../models/familia.js');

exports.get = async (req, res) => {
  try {
    const familias = await familia.findAll();
    res.json(familias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro servidor.' });
  }
}

exports.register = async (req, res) => {
  const {
    Nome,
    Descricao,
  } = req.body;
  try {
    await familia.create({
      Nome,
      Descricao,
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
        Nome,
        Descricao,
    } = req.body;
    try {
        await familia.update(
        {
            Nome,
            Descricao,
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