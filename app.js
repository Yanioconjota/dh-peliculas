const http = require('http'),
      // open = require('open'),
      hostname = 'localhost',
      port = '3030',
      rutas = require('./router');

rutas.listen(port,  hostname, () => {
  console.log('Server running in ' + port + ' port');
});