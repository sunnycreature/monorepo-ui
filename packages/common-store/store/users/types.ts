export enum UsersTypes {
  LOGIN = 'USER/LOGIN',
  LOGIN_SUCCCES = 'USER/LOGIN_SUCCCES',
  LOGIN_FAILURE = 'USER/LOGIN_FAILURE',
}

export interface User {
  id: string;
  name: string;
}

export interface UserCredentials {
  userName: string;
  password: string;
}

export interface UserState {
  readonly data: User | null;
  readonly loading: boolean;
  readonly error: boolean;
  readonly status: string;
}

export type UserPayload = Partial<{
  errorMessage: string;
  userData: User;
}>;
