const fs = require('fs'),
  getTheater = JSON.parse(fs.readFileSync('data/theaters.json', 'utf-8'));

let finalContent = 'Nuestras salas\n\n';

let theaters = getTheater.theaters.map(theater => theater.name + '\n' + theater.address + '\n' + theater.description);
theaters.sort();

finalContent += 'Total de salas: ' + theaters.length + '\n\n';
finalContent += 'Listado de salas:\n\n'

for (let oneTheater of theaters) {
  finalContent += oneTheater + '\n\n';
}

finalContent += `\nRecordá que podés visitar las secciones:\n\n• En Cartelera (/en-cartelera)\n• Más Votadas (/mas-votadas)\n• Sucursales (/sucursales)\n• Contacto (/contacto)\n• Preguntas Frecuentes (/preguntas-frecuentes)`;

module.exports = finalContent;