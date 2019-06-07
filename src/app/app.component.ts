import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppFacadeService } from './app-facade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showSidenav$: Observable<boolean> = this._facade.showSidenav$;
  loggedIn$: Observable<boolean> = this._facade.loggedIn$;

  constructor(private readonly _facade: AppFacadeService) {

  }

  closeSidenav() {
    this._facade.closeSidenav();
  }

  openSidenav() {
    this._facade.openSidenav();
  }

  logout() {
    this.closeSidenav();
    this._facade.logout();
  }
}
