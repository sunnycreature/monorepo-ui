import { ICompany, IDevice, IDeviceInfo, IMessage, IUser } from '@lib/types';

export interface INetworkError {
  type: 'ERROR';
  message: string;
}

export interface IQueryResponse {
  type:
    | 'SIGNUP'
    | 'LOGIN'
    | 'LOGOUT'
    | 'GET_CURRENT_USER'
    | 'USER_COMPANIES'
    | 'GET_USERS'
    | 'GET_USER'
    | 'GET_CODE'
    | 'VERIFY_CODE'
    | 'GET_COMPANY'
    | 'GET_COMPANIES'
    | 'ADD_DEVICE'
    | 'GET_DEVICES'
    | 'GET_DEVICE'
    | 'ADD_COMPANY'
    | 'NEW_USER'
    | 'UPDATE_COMPANY'
    | 'GET_DEVICE_BY_USER'
    | 'GET_USERS_BY_COMPANY'
    | 'REMOVE_COMPANY'
    | 'USER_NOT_AUTHENTICATED'
    | 'USER_BY_NAME'
    | 'REMOVE_DEVICES'
    | 'BLOCK_DEVICES'
    | 'GET_USERS_BY_DEVICE'
    | 'UPDATE_DEVICE'
    | 'UPDATE_USER'
    | 'REMOVE_USER'
    | 'REMOVE_DEVICE'
    | 'GET_DEVICES_BY_USER'
    | 'SEND_MESSAGE'
    | 'GET_MESSAGES'
    | 'REMOVE_MESSAGE'
    | 'CLEAR_MESSAGES'
    | 'SUBSCRIBE'
    | 'PUBLISH';
}

export interface ILoginResponse extends IQueryResponse {
  type: 'LOGIN';
  userId: string;
}

export interface ILogOutResponse extends IQueryResponse {
  type: 'LOGOUT';
  userId: string;
}

export interface IUserResponse extends IQueryResponse {
  type: 'GET_CURRENT_USER';
  user: IUser;
}

export interface IUserNotAuthResponse extends IQueryResponse {
  type: 'USER_NOT_AUTHENTICATED';
}

export interface ICompaniesResponse extends IQueryResponse {
  type: 'USER_COMPANIES';
  companies: ICompany[];
}

export interface ISignUpResponse extends IQueryResponse {
  type: 'SIGNUP';
  userId: string;
}

export interface IAllUsersResponse extends IQueryResponse {
  type: 'GET_USERS';
  users: IUser[];
}

export interface IGetUserResponse extends IQueryResponse {
  type: 'GET_USER';
  user: IUser;
}

export interface IUserByNameResponse extends IQueryResponse {
  type: 'USER_BY_NAME';
  user: IUser;
}

export interface ICreateCodeResponse extends IQueryResponse {
  type: 'GET_CODE';
  code: string;
}

export interface IVerifyCodeResponse extends IQueryResponse {
  type: 'VERIFY_CODE';
  deviceUid: string;
}

export interface IGetCompanyResponse extends IQueryResponse {
  type: 'GET_COMPANY';
  company: ICompany;
}

export interface IGetCompaniesResponse extends IQueryResponse {
  type: 'GET_COMPANIES';
  companies: ICompany[];
}

export interface IAddCompanyResponse extends IQueryResponse {
  type: 'ADD_COMPANY';
  companyId: string;
}

export interface IUpdateCompanyResponse extends IQueryResponse {
  type: 'UPDATE_COMPANY';
}

export interface ICreateUserResponse extends IQueryResponse {
  type: 'NEW_USER';
  user: IUser;
}

export interface IAddDeviceResponse extends IQueryResponse {
  type: 'ADD_DEVICE';
  uid: string;
}

export interface IGetDevicesResponse extends IQueryResponse {
  type: 'GET_DEVICES';
  devices: IDevice[];
}

export interface IGetDeviceResponse extends IQueryResponse {
  type: 'GET_DEVICE';
  device: IDevice;
}

export interface IGetDeviceByUserResponse extends IQueryResponse {
  type: 'GET_DEVICE_BY_USER';
  device: IDevice;
}

export interface IGetUsersByDeviceResponse extends IQueryResponse {
  type: 'GET_USERS_BY_DEVICE';
  userList: IDeviceInfo[];
}

export interface IGetDevicesByUserResponse extends IQueryResponse {
  type: 'GET_DEVICES_BY_USER';
  devices: IDeviceInfo[];
}

export interface IUpdateDeviceResponse extends IQueryResponse {
  type: 'UPDATE_DEVICE';
  deviceId: string;
}

export interface IUpdateUserResponse extends IQueryResponse {
  type: 'UPDATE_USER';
  userId: string;
}

export interface IRemoveUserResponse extends IQueryResponse {
  type: 'REMOVE_USER';
}

export interface IRemoveCompanyResponse extends IQueryResponse {
  type: 'REMOVE_COMPANY';
}

export interface IRemoveDeviceResponse extends IQueryResponse {
  type: 'REMOVE_DEVICE';
}

export interface IGetCompanyUsersResponse extends IQueryResponse {
  type: 'GET_USERS_BY_COMPANY';
  users: IUser[];
}

export interface IRemoveDevicesResponse extends IQueryResponse {
  type: 'REMOVE_DEVICES';
}

export interface IBlockDevicesResponse extends IQueryResponse {
  type: 'BLOCK_DEVICES';
  deviceId: string;
}

export interface ISendCompanyResponse extends IQueryResponse {
  type: 'SEND_MESSAGE';
  uid: string;
  date: Date;
}

export interface IGetMessagesResponse extends IQueryResponse {
  type: 'GET_MESSAGES';
  messageList: IMessage[];
}

export interface IRemoveMessageResponse extends IQueryResponse {
  type: 'REMOVE_MESSAGE';
}

export interface IClearMessagesResponse extends IQueryResponse {
  type: 'CLEAR_MESSAGES';
}

export interface ISubscribeResponse extends IQueryResponse {
  type: 'SUBSCRIBE';
  messageList: IMessage[];
}

export interface IPublishResponse extends IQueryResponse {
  type: 'PUBLISH';
  uid: string;
  date: Date;
}

export type QueryResponse =
  | INetworkError
  | ILoginResponse
  | IUserResponse
  | ICompaniesResponse
  | ISignUpResponse
  | IAddDeviceResponse
  | ILogOutResponse
  | IAllUsersResponse
  | IGetUserResponse
  | ICreateCodeResponse
  | IVerifyCodeResponse
  | IGetCompanyResponse
  | IAddCompanyResponse
  | ICreateUserResponse
  | IUpdateCompanyResponse
  | IGetDevicesResponse
  | IGetDeviceResponse
  | IGetDeviceByUserResponse
  | IGetUsersByDeviceResponse
  | IGetDevicesByUserResponse
  | IUpdateDeviceResponse
  | IUpdateUserResponse
  | IRemoveUserResponse
  | IRemoveDeviceResponse
  | IGetCompanyUsersResponse
  | IUserNotAuthResponse
  | IUserByNameResponse
  | IRemoveDevicesResponse
  | IBlockDevicesResponse
  | ISendCompanyResponse
  | IGetMessagesResponse
  | IRemoveMessageResponse
  | IClearMessagesResponse
  | ISubscribeResponse
  | IPublishResponse;
