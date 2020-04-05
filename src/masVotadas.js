const fs = require('fs'),
  getMovies = JSON.parse(fs.readFileSync('data/movies.json', 'utf-8'));

let finalContent = 'Películas en cartelera\n\n';

let bestRanked = getMovies.movies.filter(movie => movie.vote_average > 7);
bestRanked = bestRanked.map(movie => movie.title + '\n' + movie.vote_average + '\n' + movie.overview)
bestRanked.sort((a, b) => b.vote_average - a.vote_average);

finalContent += 'Total de peliculas en cartelera: ' + bestRanked.length + '\n\n';
finalContent += 'Listado de películas por título:\n\n';

for (let oneMovie of bestRanked) {
  finalContent += oneMovie + '\n\n';
}

finalContent += `\nRecordá que podés visitar las secciones:\n\n• En Cartelera (/en-cartelera)\n• Más Votadas (/mas-votadas)\n• Sucursales (/sucursales)\n• Contacto (/contacto)\n• Preguntas Frecuentes (/preguntas-frecuentes)`;

module.exports = finalContent;