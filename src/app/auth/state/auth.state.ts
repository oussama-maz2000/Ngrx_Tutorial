import { User } from 'src/app/model/classes/User.model';

export interface AuthState {
  user: User | null;
}

export const initialAuthState: AuthState = {
  user: null,
};
