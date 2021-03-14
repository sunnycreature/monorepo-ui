export enum СonfigTypes {
  SET_SERVER_NAME = 'CONFIG/SET_SERVER_NAME',
  SET_PORT = 'CONFIG/SET_PORT'
}

export interface ConfigState {
  server: string;
  port: number;
}
