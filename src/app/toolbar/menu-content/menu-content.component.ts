import { NoticiasService } from './../../services/noticias.service';
import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

interface Noticias {
  titulo: string;
  data_publicacao: string;
  imagem: string;
  link: string;
}

@Component({
  selector: 'app-menu-content',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, CommonModule],
  templateUrl: './menu-content.component.html',
  styleUrl: './menu-content.component.scss'
})
export class MenuContentComponent {

  date = new Date();
  fullDate = this.date.toDateString
  noticias : any[] = []
  activeIndex: number = 0;

  localImages: string[] = [
    'assets/urban.jpeg',
    'assets/nature.jpg',
    'assets/urban_tech.jpg',
    'assets/urban.jpeg',
    'assets/nature.jpg',
  ];

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit(): void {
    this.noticiasService.getNoticias().then((noticias) => {
      this.noticias = noticias;
      console.log('Noticias:', this.noticias);
    });
  }

  getCurrentImage(): string {
    // const imageUrl = this.noticias[this.activeIndex]?.imagem || '';
    // return imageUrl;
    console.log('Current Image URL:', this.localImages[this.activeIndex]);
    return this.localImages[this.activeIndex];

  }

  next(): void {
    if (this.noticias.length > 0) {
      this.activeIndex = (this.activeIndex + 1) % this.noticias.length;
    }
  }

  prev(): void {
    if (this.noticias.length > 0) {
      this.activeIndex = (this.activeIndex - 1 + this.noticias.length) % this.noticias.length;
    }
  }

}
