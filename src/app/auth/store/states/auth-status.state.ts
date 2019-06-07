import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';
import { LoginRedirect, LoginSuccess, Logout } from '../actions/auth.actions';
import { defaultAuthStatusStateModel, AuthStatusStateModel } from '../models/auth-status.model';


@State<AuthStatusStateModel>({
  name: 'status',
  defaults: defaultAuthStatusStateModel,
})
export class AuthStatusState {
  @Selector()
  static getLoggedIn(state: AuthStatusStateModel) {
    return state.loggedIn;
  }

  @Selector()
  static getUser(state: AuthStatusStateModel) {
    return state.user;
  }

  @Action(LoginSuccess)
  loginSuccess(
    { patchState }: StateContext<AuthStatusStateModel>,
    action: LoginSuccess
  ) {
    patchState({
      loggedIn: true,
      user: action.payload.user,
    });
  }

  @Action([Logout, LoginRedirect])
  logout({ dispatch, setState }: StateContext<AuthStatusStateModel>) {
    setState(defaultAuthStatusStateModel);

    dispatch(new Navigate(['/login']));
  }
}
