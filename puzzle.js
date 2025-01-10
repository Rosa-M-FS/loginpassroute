// Snippets de código para poder componer el programa

//!Usado?: Si
  const middlewares = require('./middlewares');
//--- Explicación: Importar middlewares

// -------------------------------------------------------------------------------------

//!Usado?: Si
const bodyParser = require('body-parser');
//--- Explicación:Importar body-parser

// -------------------------------------------------------------------------------------

//!Usado?: Si
const session = require('express-session');
//--- Explicación: Importar express-session

// -------------------------------------------------------------------------------------

//!Usado?: Si
const express = require('express');
//--- Explicación: Importar express

// -------------------------------------------------------------------------------------

//!Usado?: Si
const bodyParser = require('body-parser');
//--- Explicación: Importar body-parser

// -------------------------------------------------------------------------------------

//!Usado?: Si
const session = require('express-session');
//--- Explicación: Importar express-session

// -------------------------------------------------------------------------------------

//!Usado?: Si
const dotenv = require('dotenv');
//--- Explicación: Importar dotenv

// -------------------------------------------------------------------------------------

//!Usado?: Si
const middlewares = require('./middlewares');
//--- Explicación: Importar middlewares

// -------------------------------------------------------------------------------------

//!Usado?: Si
const routes = require('./routes');
//--- Explicación: Importar routes
// -------------------------------------------------------------------------------------

//!Usado?: Si
dotenv.config();
//--- Explicación:Inicializa las variables para acceder al archivo .env y obtener su contenido

// -------------------------------------------------------------------------------------

//!Usado?: Si
const app = express();
//--- Explicación: LLamar a express

// -------------------------------------------------------------------------------------

//!Usado?: Si
const PORT = 4000;
//--- Explicación: Constante para puerto

// -------------------------------------------------------------------------------------

//!Usado?: Si
const dotenv = require('dotenv');
//--- Explicación: Importación de dotenv

// -------------------------------------------------------------------------------------

//!Usado?:Si
dotenv.config();
//--- Explicación: Inicializa las variables para acceder al archivo .env y obtener su contenido

// -------------------------------------------------------------------------------------

//!Usado?:Si
middlewares.setupApp(app);
//--- Explicación: Configuración utilizando el módulo middlewares

// -------------------------------------------------------------------------------------

//!Usado?:Si
routes.setup(app);
//--- Explicación: Configuración de rutas utilizando el módulo routes

// -------------------------------------------------------------------------------------

//!Usado?:Si
const validarPalabraMiddleware = (req, res, next) => {
  const palabraCorrecta = process.env.PALABRA_SECRETA || '';

  if (req.body.palabra === palabraCorrecta) {
    req.session.palabraSecreta = req.body.palabra;
    next();
  } else {
    res.redirect('/?error=1');
  }
};
//--- Explicación: Función validar que la palabra secreta es correcta


// -------------------------------------------------------------------------------------


//!Usado?: Si
const setup = (app) => {
  app.get('/', (req, res) => {
    const mensajeError = req.query.error
      ? (req.query.error === '1' ? 'Palabra incorrecta, inténtalo de nuevo.' : 'No estás logado.')
      : '';
    if (req.session.palabraSecreta) {
      return res.redirect('/profile');
    }
  //Aquí va código dentro
})}
//--- Explicación: Gestión de los errores 


// -------------------------------------------------------------------------------------


//!Usado?:Si
res.send(`
  <html>
    <body>
      <h1>Página de Inicio</h1>
      <p>${mensajeError}</p>
      <form method="post" action="/profile">
        <label for="palabra">Introduce la palabra:</label>
        <input type="text" name="palabra" required>
        <button type="submit">Enviar</button>
      </form>
    </body>
  </html>
`);
//--- Explicación: utilizado dentro de routes para el mensaje de error 
// si la palabra es incorrecta


// -------------------------------------------------------------------------------------

//!Usado?: Si
const setupAPP = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session({
    secret: 'secretoSuperSecreto',
    resave: false,
    saveUninitialized: true,
  }));
};
//--Explicacion: Inicialización de parametros de sesión inicial dentro del middleware

//!Usado?:Si
app.post('/profile', middlewares.validarPalabraMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: Define la ruta /profile habiendo hecho uso del middleware 
// para verificar la palabra

// -------------------------------------------------------------------------------------

//!Usado?:Si
app.use(bodyParser.urlencoded({ extended: true }));

//--- Explicación: Analiza el cuerpo de la solicitud para pasar al middleware

// -------------------------------------------------------------------------------------

//!Usado?:Si
app.use(session({
  secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
  resave: false,
  saveUninitialized: true,
}));

//--- Explicación: Código para configurar la sesión

// -------------------------------------------------------------------------------------

//!Usado?:Si
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
//--- Explicación: Escucha del puerto correspondiente

// -------------------------------------------------------------------------------------

//!Usado?:Si
const verificarSesionMiddleware = (req, res, next) => {
  if (req.session.palabraSecreta) {
    next();
  } else {
    res.redirect('/?error=2');
  }
};
//--- Explicación: Función que verifica si la palabra es correcta continua y si no envía mensaje de error 

// -------------------------------------------------------------------------------------


//!Usado?:Si
app.get('/profile', middlewares.verificarSesionMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil (Sesión activa)</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: En el middleware para verficar que la palabra es correcta y 
// dirigir al incio de sesión

// -------------------------------------------------------------------------------------


//!Usado?:Si
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error al cerrar sesión:', err);
    }
    res.redirect('/');
  });
});
//--- Explicación: Permite volver a la página principal "cerrando sesión"

// -------------------------------------------------------------------------------------

//!Usado?:Si
module.exports = {
  setup,
};
//--- Explicación: Exportación del módulo de rutas

// -------------------------------------------------------------------------------------

//!Usado?:Si
module.exports = {
  validarPalabraMiddleware,
  verificarSesionMiddleware,
  setupAPP,
};
//--- Explicación:Exportación de módulos del middleware

// -------------------------------------------------------------------------------------

