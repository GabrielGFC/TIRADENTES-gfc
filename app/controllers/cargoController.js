//export da biblioteca
const User = require('../models/Cargo');
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
    try {
        const { 
            cargo,  
        } = req.body;

        await User.create({   
            cargo,
        });
        res.status(201).json({ message: 'familia register successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


