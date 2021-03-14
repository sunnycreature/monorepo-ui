import { IResponse, IUser } from '@lib/types';

import {
  IAllUsersResponse,
  IGetUserResponse,
  INetworkError,
  IRemoveUserResponse,
  IUpdateUserResponse,
} from '../queryTypes';

import { api } from '../params';

const getUsers = async () => {
  const res = await api.get<IResponse<IUser[]>>(`/users`);
  const userData = res.data;

  if (userData.result) {
    return {
      type: 'GET_USERS',
      users: userData.data,
    } as IAllUsersResponse;
  }
  return {
    type: 'ERROR',
    message: userData.error,
  } as INetworkError;
};

// const getDevicesByUser = async (userId: string) => {
//   const res = await api.get<IResponse<IDeviceInfo[]>>(
//     `/users/${userId}/devices`
//   );
//   const userData = res.data;

//   if (userData.result) {
//     return {
//       type: 'GET_DEVICES_BY_USER',
//       devices: userData.data,
//     } as IGetDevicesByUserResponse;
//   }
//   return {
//     type: 'ERROR',
//     message: userData.error,
//   } as INetworkError;
// };

const getUser = async (userId: string) => {
  const res = await api.get<IResponse<IUser>>(
    `/users/${userId}`
  );
  const userData = res.data;

  if (userData.result) {
    return {
      type: 'GET_USER',
      user: userData.data,
    } as IGetUserResponse;
  }
  return {
    type: 'ERROR',
    message: userData.error,
  } as INetworkError;
};

const updateUser = async (user: Partial<IUser>) => {
  const res = await api.patch<IResponse<string>>(
    `/users/${user.id}`,
    user
  );
  const userData = res.data;

  if (userData.result) {
    return {
      type: 'UPDATE_USER',
      userId: userData.data,
    } as IUpdateUserResponse;
  }
  return {
    type: 'ERROR',
    message: userData.error,
  } as INetworkError;
};

const removeUser = async (userId: string) => {
  const res = await api.delete<IResponse<void>>(
    `/users/${userId}`
  );
  const userData = res.data;

  if (userData.result) {
    return {
      type: 'REMOVE_USER',
    } as IRemoveUserResponse;
  }
  return {
    type: 'ERROR',
    message: userData.error,
  } as INetworkError;
};

export default { getUsers, getUser, updateUser, removeUser };
