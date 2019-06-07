export interface LoginPageStateModel {
  error: string | null;
  pending: boolean;
}

export const defaultLoginPageStateModel: LoginPageStateModel = {
  error: null,
  pending: false,
};
