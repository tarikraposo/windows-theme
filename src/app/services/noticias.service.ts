import { Injectable } from '@angular/core';

interface Noticias {
  items: [{
    titulo: string;
    data_publicacao: string;
    imagem: string;
    link: string;
  } ]
}

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  url = `https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=5`;

  constructor() { }

  getNoticias() {
    const baseUrl = 'https://servicodados.ibge.gov.br/'; // Domínio base da API

    return fetch(this.url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (!data.items || !Array.isArray(data.items)) {
          throw new Error('Formato inesperado da resposta da API');
        }
        return data.items.map((noticia: any) => {
          // Parse o campo 'imagens' para acessar as URLs
          const imagens = noticia.imagens ? JSON.parse(noticia.imagens) : {};
          return {
            titulo: noticia.titulo,
            data_publicacao: noticia.data_publicacao,
            imagem: imagens.image_intro ? baseUrl + imagens.image_intro : '', // Concatena o domínio base com o caminho relativo
            link: noticia.link
          };
        });
      })
      .catch(error => {
        console.error('Erro ao buscar notícias:', error);
        return [];
      });
  }

}
