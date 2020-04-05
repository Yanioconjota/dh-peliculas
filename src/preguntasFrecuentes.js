const fs = require('fs'),
  getQuestion = JSON.parse(fs.readFileSync('data/faqs.json', 'utf-8'));

let finalContent = 'Preguntas frecuentes\n\n';

let questions = getQuestion.faqs.map(question => question.faq_title + '\n' + question.faq_answer);
questions.sort();

finalContent += 'Total de preguntas: ' + questions.length + '\n\n';
finalContent += 'Listado de preguntas:\n\n'

for (let question of questions) {
  finalContent += question + '\n\n';
}

finalContent += `\nRecordá que podés visitar las secciones:\n\n• En Cartelera (/en-cartelera)\n• Más Votadas (/mas-votadas)\n• Sucursales (/sucursales)\n• Contacto (/contacto)\n• Preguntas Frecuentes (/preguntas-frecuentes)`;

module.exports = finalContent;