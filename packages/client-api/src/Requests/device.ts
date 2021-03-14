import { IDevice, IDeviceInfo, IResponse } from '@lib/types';

import {
  IAddDeviceResponse,
  IGetDeviceResponse,
  IGetDevicesResponse,
  IGetUsersByDeviceResponse,
  INetworkError,
  IRemoveDeviceResponse,
  IUpdateDeviceResponse,
} from '../queryTypes';

import { api } from '../params';

const addDevice = async (deviceName: string, userId: string) => {
  const body = {
    deviceName,
    userId,
  };
  const res = await api.post<IResponse<string>>('/devices', body);
  const resData = res.data;

  if (resData.result) {
    return {
      type: 'ADD_DEVICE',
      uid: resData.data,
    } as IAddDeviceResponse;
  }
  return {
    type: 'ERROR',
    message: resData.error,
  } as INetworkError;
};
/**
  * Получить
    - все устройства;
    - все устройства по пользователю;
  * @param userId
  * @returns
  */
const getDevices = async (userId?: string) => {
  const res = await api.get<IResponse<IDevice[]>>(
    `/devices?${userId ? `userId=${userId}` : ''}`
  );
  const resData = res.data;

  if (resData.result) {
    return {
      type: 'GET_DEVICES',
      devices: resData.data,
    } as IGetDevicesResponse;
  }
  return {
    type: 'ERROR',
    message: resData.error,
  } as INetworkError;
};

/**
  * Получить
    - устройство по id;
    - устройство по id и по пользователю;
  * @param userId
  * @returns
  */
const getDevice = async (deviceId: string, userId?: string) => {
  const res = await api.get<IResponse<IDevice>>(
    `/devices/${deviceId}${userId ? `userId=${userId}` : ''}`
  );
  const resData = res.data;

  if (resData.result) {
    return {
      type: 'GET_DEVICE',
      device: resData.data,
    } as IGetDeviceResponse;
  }
  return {
    type: 'ERROR',
    message: resData.error,
  } as INetworkError;
};

// /* Проверка устройства по пользователю - есть ли в базе сервера */
// const getDeviceByUser = async (userName: string) => {
//   const res = await api.get<IResponse<IDevice>>(
//     `/devices/${deviceId}/user/${userName}`
//   );
//   const resData = res.data;

//   if (resData.result) {
//     return {
//       type: 'GET_DEVICE_BY_USER',
//       device: resData.data,
//     } as IGetDeviceByUserResponse;
//   }
//   return {
//     type: 'ERROR',
//     message: resData.error,
//   } as INetworkError;
// };

const getUsersByDevice = async (deviceId: string) => {
  const res = await api.get<IResponse<IDeviceInfo[]>>(
    `/devices/${deviceId}/users`
  );
  const resData = res.data;

  if (resData.result) {
    return {
      type: 'GET_USERS_BY_DEVICE',
      userList: resData.data,
    } as IGetUsersByDeviceResponse;
  }
  return {
    type: 'ERROR',
    message: resData.error,
  } as INetworkError;
};

const updateDevice = async (device: Partial<IDevice>) => {
  const res = await api.patch<IResponse<string>>(
    `/devices/${device.id}`,
    device
  );
  const resData = res.data;

  if (resData.result) {
    return {
      type: 'UPDATE_DEVICE',
      deviceId: resData.data,
    } as IUpdateDeviceResponse;
  }
  return {
    type: 'ERROR',
    message: resData.error,
  } as INetworkError;
};

const removeDevice = async (deviceId: string) => {
  const res = await api.delete<IResponse<void>>(`/devices/${deviceId}`);
  const resData = res.data;

  if (resData.result) {
    return {
      type: 'REMOVE_DEVICE',
    } as IRemoveDeviceResponse;
  }
  return {
    type: 'ERROR',
    message: resData.error,
  } as INetworkError;
};

export default {
  addDevice,
  getDevices,
  getDevice,
  getUsersByDevice,
  updateDevice,
  removeDevice,
};
