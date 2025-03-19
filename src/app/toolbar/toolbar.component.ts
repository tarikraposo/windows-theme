import { Component, HostListener, ElementRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { MenuContentComponent } from './menu-content/menu-content.component';
import { ExplorerComponent } from '../explorer/explorer.component';
import { ExplorerService } from '../services/explorer.service';
import { BrowserService } from '../services/browser.service';
import { BrowserComponent } from '../browser/browser.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, CommonModule, MenuContentComponent, ExplorerComponent],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  menuOpen = false;

  constructor(private explorerService: ExplorerService, private elementRef: ElementRef, private dialog: MatDialog, private browserService: BrowserService) {}

  openBrowser(): void {
    this.dialog.open(BrowserComponent, {
      width: '85%',
      height: '85%',
      panelClass: 'custom-dialog-container', // Classe CSS opcional para personalização
    });
  }

  toggleExplorer(): void {
    this.explorerService.toggleExplorer();
    this.menuOpen = false;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      this.explorerService.closeExplorer(); // Fecha o Explorer ao abrir o menu
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    const clickedInsideToolbar = this.elementRef.nativeElement.contains(event.target);
    const clickedInsideExplorer = (event.target as HTMLElement).closest('#explorer');

    if (!clickedInsideToolbar && !clickedInsideExplorer) {
      this.menuOpen = false; // Fecha o menu
      this.explorerService.closeExplorer(); // Fecha o Explorer
    }
  }
}
