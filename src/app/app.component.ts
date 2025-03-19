import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { ExplorerService } from './services/explorer.service';
import { ExplorerComponent } from "./explorer/explorer.component";
import { CommonModule } from '@angular/common';
import { BrowserService } from './services/browser.service';
import { BrowserComponent } from "./browser/browser.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, ExplorerComponent, CommonModule, BrowserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'windows';
  explorerOpen$ = this.explorerService.explorerOpen$;
  browserOpen$ = this.browserService.browserOpen$;

  constructor(private explorerService: ExplorerService, private browserService: BrowserService) {}
}
