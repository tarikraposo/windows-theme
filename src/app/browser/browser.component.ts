import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-browser',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './browser.component.html',
  styleUrl: './browser.component.scss'
})
export class BrowserComponent {
  url: string = 'https://example.com'; // URL padrão
  htmlContent: string = ''; // Armazena o conteúdo HTML do site

  constructor(private http: HttpClient) {}

  loadWebsite(): void {
    const proxyUrl = `http://localhost:3000/proxy?url=${encodeURIComponent(this.url)}`;
    this.http.get(proxyUrl, { responseType: 'text' }).subscribe({
      next: (response) => {
        this.htmlContent = response;
      },
      error: (err) => {
        console.error('Erro ao carregar o site:', err);
        this.htmlContent = '<p>Erro ao carregar o site.</p>';
      },
    });
  }
}
