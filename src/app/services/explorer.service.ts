import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExplorerService {
  private explorerOpenSubject = new BehaviorSubject<boolean>(false);
  explorerOpen$ = this.explorerOpenSubject.asObservable();

  toggleExplorer(): void {
    this.explorerOpenSubject.next(!this.explorerOpenSubject.value);
  }

  closeExplorer(): void {
    this.explorerOpenSubject.next(false);
  }

  openExplorer(): void {
    this.explorerOpenSubject.next(true);
  }
}
