const authRoutes = require('./routes/authRoutes');
const caixaRoutes = require('./routes/caixaRoutes');
const userRoutes = require('./routes/userRoutes');
const estoqueRoutes = require('./routes/estoqueRoutes');
const itemRoutes = require('./routes/itemRoutes')
const sequelize = require('./config/database');
const cargoRoutes = require('./routes/cargoRoutes');
const familiaRoutes = require('./routes/familiaRoutes.js');
const isAuthenticated = require('./middlewares/authenticationMiddleware')
const express = require('express');
const session = require('express-session');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.use(express.json());
app.use(session({ secret: 'your-secret-key',
resave: false,
saveUninitialized: false }));

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/estoque', estoqueRoutes);
app.use('/item', itemRoutes);
app.use('/caixa', caixaRoutes);
app.use(`/cargo`,cargoRoutes);
app.use(`/familia`,familiaRoutes)


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