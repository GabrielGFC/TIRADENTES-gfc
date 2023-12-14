const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.login = async (req, res) => {
    const { matricula, senha } = req.body;
    try {
        const user = await User.findOne({ where: { matricula } });
        if (!user || !bcrypt.compareSync(senha, user.senha)) {
            return res.status(401).json({ message: 'Invalid CPF or senha' });
        }
        req.session.user = user;
        res.status(200).json({ message: 'Login successful' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.status(200).json({ message: 'Logged out successfully' });
    });
};
