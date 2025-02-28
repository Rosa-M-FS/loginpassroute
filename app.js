const express = require('express');
const app = express();

const session = require('express-session');
const middlewares = require('./middlewares');
const routes = require('./routes');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

middlewares.setupAPP(app);

routes.setup(app);

dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
  resave: false,
  saveUninitialized: true,
}));


const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
  });