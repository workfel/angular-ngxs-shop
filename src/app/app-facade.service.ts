import { Injectable } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthStatusState, Logout } from './auth/store';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { LayoutState } from './core/store/states/layout.state';
import { CloseSidenav, OpenSidenav } from './core/store/actions/layout.actions';

@Injectable({
  providedIn: 'root'
})
export class AppFacadeService {

  @Select(LayoutState.getShowSidenav) showSidenav$: Observable<boolean>;
  @Select(AuthStatusState.getLoggedIn) loggedIn$: Observable<boolean>;

  constructor() {
  }

  @Dispatch()
  closeSidenav() {
    return new CloseSidenav();
  }

  @Dispatch()
  openSidenav() {
    return new OpenSidenav();
  }

  @Dispatch()
  logout() {
    return new Logout();
  }
}
