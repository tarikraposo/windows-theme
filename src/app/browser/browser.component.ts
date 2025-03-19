import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-browser',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './browser.component.html',
  styleUrl: './browser.component.scss'
})
export class BrowserComponent {
  url: string = 'https://www.example.com'; // URL padrão

  get proxiedUrl(): string {
    return `http://localhost:3000/proxy?url=${encodeURIComponent(this.url)}`;
  }

  constructor(public sanitizer: DomSanitizer) {}

  updateIframe(): void {
    console.log('URL atualizada para:', this.url);
  }
}
