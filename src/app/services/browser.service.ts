import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BrowserService {
  private browserOpenSubject = new BehaviorSubject<boolean>(false);
  browserOpen$ = this.browserOpenSubject.asObservable();

  toggleBrowser(): void {
    this.browserOpenSubject.next(!this.browserOpenSubject.value);
  }
}
