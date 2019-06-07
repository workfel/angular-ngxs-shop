import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Authenticate } from '../../models/user';
import { Login, LoginPageState } from '../../store';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginPageFacadeService {

  @Select(LoginPageState.getPending) pending$: Observable<boolean>;
  @Select(LoginPageState.getError) error$: Observable<string>;

  @Dispatch()
  login(model: Authenticate) {
    return new Login(model);
  }
}
