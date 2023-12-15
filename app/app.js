const express = require('express');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const estoqueRoutes = require('./routes/estoqueRoutes');
const itemRoutes = require('./routes/itemRoutes')
const sequelize = require('./config/database');
const isAuthenticated = require('./middlewares/authenticationMiddleware')
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
app.use('/item',isAuthenticated, itemRoutes);


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