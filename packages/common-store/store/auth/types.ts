import { IBaseUrl, IDevice, IUser } from "@lib/types";

export type IAuthState = {
  readonly user: IUser | null | undefined;
  readonly device: IDevice | null | undefined;
  readonly settings: IBaseUrl | undefined;
  readonly settingsForm: boolean;  
  readonly loading: boolean;
  readonly error: boolean;
  readonly status: string;
};


// TODO: заменитm на  IResponse<IDevice>
export type DevicePayload = Partial<{
  errorMessage: string;
  deviceData: IDevice;
}>;

// TODO: заменить на  IResponse<IUser>
export type UserPayload = Partial<{
  errorMessage: string;
  userData: IUser;
}>;
