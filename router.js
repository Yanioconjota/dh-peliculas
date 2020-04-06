const http = require('http'),
  hostname = 'localhost',
  port = '3030',
  home = require('./src/homePage'),
  enCartelera = require('./src/enCartelera'),
  masVotadas = require('./src/masVotadas'),
  contacto = require('./src/contacto'),
  faq = require('./src/preguntasFrecuentes'),
  sucursales = require('./src/sucursales'),
  rutas = http.createServer((req, res) => {
    // Route System
    res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8'
    });
    switch (req.url) {
      case '/':
      case 'home':
        res.end(home);
        break;

      case '/en-cartelera':
        res.end(enCartelera);
        break;

      case '/mas-votadas':
        res.end(masVotadas);
        break;

      case '/sucursales':
        res.end(sucursales);
        break;

      case '/contacto':
        res.end(contacto);
        break;

      case '/preguntas-frecuentes':
      case '/faq':
        res.end(faq);
        break;

      default:
        res.end('Server running in ' + port + ' port')
        break;
    }
  });

module.exports = rutas;