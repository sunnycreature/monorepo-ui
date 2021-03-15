import { IBaseUrl, IDevice } from "@lib/types";

export enum AuthTypes {
  INIT = 'AUTH/INIT',
  SET_DEVICE = 'AUTH/SET_DEVICE',
  SET_SETTINGS = 'AUTH/SET_PORT',
  SET_SETTINGS_FORM = 'AUTH/SET_SETTINGS_FORM',
  CONNECTION = 'AUTH/CONNECTION',
  CONNECTION_SUCCCES = 'AUTH/CONNECTION_SUCCCES',
  CONNECTION_FAILURE = 'AUTH/CONNECTION_FAILURE',
}

export type IAuthState = {
  readonly device: IDevice | null | undefined;
  readonly settings: IBaseUrl | undefined;
  readonly loading: boolean;
  readonly error: boolean;
  readonly status: string;
};

export type DevicePayload = Partial<{
  errorMessage: string;
  deviceData: IDevice;
}>;
