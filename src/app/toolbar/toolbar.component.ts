import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { MenuContentComponent } from "./menu-content/menu-content.component";
import { ExplorerComponent } from "../explorer/explorer.component";
import { ExplorerService } from '../services/explorer.service';



@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, CommonModule, MenuContentComponent, ExplorerComponent],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

  menuOpen = false;
  explorerOpen = false;
  
  constructor(private explorerService: ExplorerService) {}

  toggleExplorer(): void {
    this.explorerService.toggleExplorer();
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

}
