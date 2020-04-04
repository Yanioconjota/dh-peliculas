const http = require('http'),
      open = require('open'),
      hostname = '127.0.0.1',
      port = '3030';

http.createServer((req, res) => {
  // Route System
  switch (req.url) {
    case '/':
      res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
      });
      res.end('Server running in ' + port + ' port');
      break;

    case '/en-cartelera':
      res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
      });
      res.end('Cartelera');
      break;
    
    case '/mas-votadas':
      res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
      });
      res.end('Mas votadas');
      break;
    
    case '/sucursales':
      res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
      });
      res.end('Scursales');
      break;

    case '/contacto':
      res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
      });
      res.end('Scursales');
      break;
    
      case '/preguntas-frecuentes':
      case '/faq':
      res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
      });
      res.end('FAQ');
      break;

    default:
      res.end('Server running in ' + port + ' port')
      break;
  }
}).listen(port,  hostname, () => {
  console.log('Server running in ' + port + ' port');
  open('http://' + hostname + ':' + port);
});