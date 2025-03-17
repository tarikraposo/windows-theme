import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { ExplorerService } from './services/explorer.service';
import { ExplorerComponent } from "./explorer/explorer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, ExplorerComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'windows';
  explorerOpen$ = this.explorerService.explorerOpen$;

  constructor(private explorerService: ExplorerService) {}
}
