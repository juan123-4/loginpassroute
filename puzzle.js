// Snippets de código para poder componer el programa

//Usado?: 
  const middlewares = require('./middlewares');
//--- Explicación: 

// -------------------------------------------------------------------------------------

//Usado?: yes
const bodyParser = require('body-parser');
//--- Explicación:
//Te ayuda a manejar datos en formato JSON en una solicitud POST de manera
// que puedas trabajar con ellos directamente en tu código sin tener que hacer muchas conversiones manuales.
// -------------------------------------------------------------------------------------

//Usado?: yes
const session = require('express-session');
//--- Explicación:
//se utiliza para manejar las sesiones en aplicaciones Express.
// -------------------------------------------------------------------------------------

//Usado?: yes
const express = require('express');
//--- Explicación:
//Necesito traer express 
// -------------------------------------------------------------------------------------

//Usado?: yes
const bodyParser = require('body-parser');
//--- Explicación:
//Te ayuda a manejar datos en formato JSON en una solicitud POST de manera
// que puedas trabajar con ellos directamente en tu código sin tener que hacer muchas conversiones manuales.
// -------------------------------------------------------------------------------------

//Usado?: yes
const session = require('express-session');
//--- Explicación:
//se utiliza para manejar las sesiones en aplicaciones Express.
// -------------------------------------------------------------------------------------

//Usado?: yes
const dotenv = require('dotenv');
//--- Explicación:
//se utiliza para cargar variables de entorno desde un archivo .env en process.env.
// -------------------------------------------------------------------------------------

//Usado?: yes
const middlewares = require('./middlewares');
//--- Explicación:
//necesito poder usar la funcion que esta en esa carpeta
// -------------------------------------------------------------------------------------

//Usado?: yes
const routes = require('./routes');
//--- Explicación:
//necesito poder usar la funcion que esta en esa carpeta
// -------------------------------------------------------------------------------------

//Usado?: yes
dotenv.config();
//--- Explicación:
//Al llamar a dotenv.config(), se leen las claves y valores definidos en el archivo .env y 
// se agregan al entorno de ejecución de Node.js, 
// permitiendo que puedas acceder a estas variables a través de process.env.
// -------------------------------------------------------------------------------------

//Usado?: yes
const app = express();
//--- Explicación:
//para poder usar express a voluntad y sus funciones
// -------------------------------------------------------------------------------------

//Usado?: yes
const PORT = 4000;
//--- Explicación:
//asignarle un numero de puerto unico a mi servidor
// -------------------------------------------------------------------------------------

//Usado?: 
const dotenv = require('dotenv');
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?:
dotenv.config();
//--- Explicación:

// -------------------------------------------------------------------------------------

//Usado?:yes
middlewares.setupApp(app);
//--- Explicación: 
//Esta función se utiliza para configurar middlewares específicos en tu aplicación Express.
// -------------------------------------------------------------------------------------

//Usado?: yes
routes.setup(app);
//--- Explicación: 
//Esta función se utiliza para configurar las rutas específicas en tu aplicación Express.
// -------------------------------------------------------------------------------------

//Usado?: yes
const validarPalabraMiddleware = (req, res, next) => {
  const palabraCorrecta = process.env.PALABRA_SECRETA || '';

  if (req.body.palabra === palabraCorrecta) {
    req.session.palabraSecreta = req.body.palabra;
    next();
  } else {
    res.redirect('/?error=1');
  }
};
//--- Explicación: 
// necesito la funcion de midddleware para validar la palabra

// -------------------------------------------------------------------------------------


//Usado?:yes
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
//--- Explicación: 
//Esto verifica si hay un parámetro de consulta error en la URL. 
// Si error es igual a 1, asigna el mensaje "Palabra incorrecta, 
// inténtalo de nuevo." a mensajeError. Si error es cualquier otro valor, asigna "No estás logado." 
// a mensajeError. Si no hay un parámetro error, mensajeError se queda como una cadena vacía.
//si la sesión del usuario tiene una propiedad llamada palabraSecreta. Si es así, redirige al usuario a la ruta /profile.
// -------------------------------------------------------------------------------------


//Usado?:yes
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
//--- Explicación: 
//se lanza un mensa de error (si es que lo hay)

// -------------------------------------------------------------------------------------

//usado?:yes
const setupAPP = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(session({
    secret: 'secretoSuperSecreto',
    resave: false,
    saveUninitialized: true,
  }));
};

//---- Explicación: La función setupAPP configura dos middlewares importantes en tu aplicación Express:
// body-parser: Para analizar los cuerpos de las solicitudes HTTP.
// express-session: Para manejar sesiones de usuario.
// Estas configuraciones permiten que tu aplicación procese datos de formularios y gestione sesiones de usuario de manera efectiva.

//Usado?:yes
app.post('/profile', middlewares.validarPalabraMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: 
//Valida la palabra.Si la palabra no es correcta, redirige al usuario a la página de inicio con un mensaje de error.
// Si la palabra es correcta, pasa la solicitud a la función callback principal.
//esta ruta maneja la validación de la palabra y, si es exitosa, muestra una página de perfil con la opción de cerrar sesión.
// -------------------------------------------------------------------------------------

//Usado?:yes
app.use(bodyParser.urlencoded({ extended: true }));

//--- Explicación: 
//Esta configuración de body-parser permite que tu aplicación Express analice los datos enviados
//  en el cuerpo de las solicitudes HTTP con el formato application/x-www-form-urlencoded
// -------------------------------------------------------------------------------------

//Usado?:yes
app.use(session({
  secret: process.env.PALABRA_SECRETA || 'secretoSuperSecreto',
  resave: false,
  saveUninitialized: true,
}));

//--- Explicación: 
//La línea app.use(session({...})) configura express-session como middleware en tu aplicación Express. 
//Esto permite manejar sesiones de usuario, utilizando una cadena secreta para firmar las cookies de sesión,
//optimizando la gestión de las sesiones al no guardar sesiones sin cambios y almacenando sesiones no modificadas según sea necesario.
// -------------------------------------------------------------------------------------

//Usado?: yes
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
//--- Explicación: 
//para verificar que mi servidor si esta escuchando
// -------------------------------------------------------------------------------------

//Usado?:yes
const verificarSesionMiddleware = (req, res, next) => {
  if (req.session.palabraSecreta) {
    next();
  } else {
    res.redirect('/?error=2');
  }
};
//--- Explicación: 
//verificacion de sesion
// -------------------------------------------------------------------------------------


//Usado?:yes
app.get('/profile', middlewares.verificarSesionMiddleware, (req, res) => {
  res.send(`
    <h1>Ruta del Perfil (Sesión activa)</h1>
    <form method="post" action="/logout">
      <button type="submit">Log Out</button>
    </form>
  `);
});
//--- Explicación: 
//esta ruta maneja la verificación de la sesión del usuario y, si es exitosa, muestra una página de perfil con la opción de cerrar sesión.
// -------------------------------------------------------------------------------------


//Usado?:yes
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error al cerrar sesión:', err);
    }
    res.redirect('/');
  });
});
//--- Explicación: 
//este código maneja el proceso de cierre de sesión del usuario al destruir la sesión y redirigir al usuario a la página de inicio.
//Es una parte esencial para manejar la autenticación y la gestión de sesiones en una aplicación web.
// -------------------------------------------------------------------------------------

//Usado?: yes
module.exports = {
  setup,
};
//--- Explicación:
//Exportar la funcion de routes a la pagina principal
// -------------------------------------------------------------------------------------

//Usado?: yes
module.exports = {
  validarPalabraMiddleware,
  verificarSesionMiddleware,
  setupAPP,
};
//--- Explicación:
//necesito exportar estas funciones de middleware a la pagina principal
// -------------------------------------------------------------------------------------

