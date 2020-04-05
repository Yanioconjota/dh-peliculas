const datosContacto = {
  titulo : 'Contáctanos.',
  email: 'dhmovies @digitalhouse.com',
  contenido: '​¿Tenés algo para contarnos?\nNos encanta escuchar a nuestros clientes.Si deseas contactarnos podés escribirnos al siguiente email: dhmovies @digitalhouse.com o en las redes sociales. \nEnvianos tu consulta, sugerencia o reclamo y será respondido a la brevedad posible.\nRecordá que también podes consultar la sección de Preguntas Frecuentes para obtener respuestas inmediatas a los problemas más comunes.'
}

let finalContent = datosContacto.titulo + '\n\n' + datosContacto.contenido;

finalContent += `\nRecordá que podés visitar las secciones:\n\n• En Cartelera (/en-cartelera)\n• Más Votadas (/mas-votadas)\n• Sucursales (/sucursales)\n• Contacto (/contacto)\n• Preguntas Frecuentes (/preguntas-frecuentes)`;


module.exports = finalContent;