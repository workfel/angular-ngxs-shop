import { catchError, map } from 'rxjs/operators';

import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';

import { Login, LoginFailure, LoginSuccess } from '../actions/auth.actions';
import { AuthService } from '../../services/auth.service';
import { defaultLoginPageStateModel, LoginPageStateModel } from '../models/login-page.model';

@State<LoginPageStateModel>({
  name: 'loginPage',
  defaults: defaultLoginPageStateModel
})
export class LoginPageState {
  constructor(private authService: AuthService) {
  }

  @Selector()
  static getError(state: LoginPageStateModel) {
    return state.error;
  }

  @Selector()
  static getPending(state: LoginPageStateModel) {
    return state.pending;
  }

  @Action(Login)
  login(
    { dispatch, patchState }: StateContext<LoginPageStateModel>,
    action: Login
  ) {
    patchState({
      error: null,
      pending: true,
    });
    return this.authService.login(action.payload).pipe(
      map(user => dispatch(new LoginSuccess({ user }))),
      catchError(error => {
        return dispatch(new LoginFailure(error));
      })
    );
  }

  @Action(LoginSuccess)
  loginSuccess({ dispatch, patchState }: StateContext<LoginPageStateModel>) {
    patchState({
      error: null,
      pending: false,
    });

    dispatch(new Navigate(['/']));
  }

  @Action(LoginFailure)
  loginFailure(
    { patchState }: StateContext<LoginPageStateModel>,
    action: LoginFailure
  ) {
    patchState({
      error: action.payload,
      pending: false,
    });
  }
}
