const fs = require('fs'),
  getMovies = JSON.parse(fs.readFileSync('data/movies.json', 'utf-8'));

let finalContent = 'Películas en cartelera\n\n';

let nowShowing = getMovies.movies.filter(movie => movie.release_date.indexOf('2019') !== -1);
nowShowing = nowShowing.map(movie => movie.title + '\n' + movie.overview)
nowShowing.sort()

finalContent += 'Total de peliculas en cartelera: ' + nowShowing.length + '\n\n';
finalContent += 'Listado de películas por título:\n\n';

for (let oneMovie of nowShowing) {
  finalContent += oneMovie + '\n\n';
}

finalContent += `\nRecordá que podés visitar las secciones:\n\n• En Cartelera (/en-cartelera)\n• Más Votadas (/mas-votadas)\n• Sucursales (/sucursales)\n• Contacto (/contacto)\n• Preguntas Frecuentes (/preguntas-frecuentes)`;

module.exports = finalContent;