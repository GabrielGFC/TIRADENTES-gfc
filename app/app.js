const express = require('express');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const caixaRoutes = require('./routes/caixaRoutes');
const sequelize = require('./config/database');
const cargoRoutes = require('./routes/cargoRoutes');
const familiaRoutes = require('./routes/familiaRoutes.js');

const app = express();

app.use(express.json());
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/caixa', caixaRoutes);
app.use(`/cargos`,cargoRoutes);
app.use(`/familias`,familiaRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });