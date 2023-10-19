const express = require('express');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const sequelize = require('./config/database');

const app = express();

app.use(express.json());
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));

app.use('/auth', authRoutes);
app.use('/user',userRoutes);


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