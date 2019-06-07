import { User } from '../../models/user';

export interface AuthStatusStateModel {
  loggedIn: boolean;
  user: User | null;
}

export const defaultAuthStatusStateModel: AuthStatusStateModel = {
  loggedIn: false,
  user: null,
};
