import { IMessage, IMessageInfo, IResponse } from '@lib/types';

import {
  IClearMessagesResponse,
  IGetMessagesResponse,
  INetworkError,
  IPublishResponse,
  IRemoveMessageResponse,
  ISendCompanyResponse,
  ISubscribeResponse,
} from '../queryTypes';

import { api } from '../params';

const sendMessages = async (
  systemName: string,
  companyId: string,
  consumer: string,
  message: IMessage['body']
) => {
  const body = {
    head: { companyId, consumer, appSystem: systemName },
    message,
  };
  const res = await api.post<IResponse<IMessageInfo>>('/messages', body);
  const resData = res.data;
  if (resData.result) {
    return {
      type: 'SEND_MESSAGE',
      uid: resData.data?.uid,
      date: resData.data?.date,
    } as ISendCompanyResponse;
  }
  return {
    type: 'ERROR',
    message: resData.error,
  } as INetworkError;
};

const getMessages = async (systemName: string, companyId: string) => {
  const res = await api.get<IResponse<IMessage[]>>(
    `/messages/${companyId}/${systemName}`
  );
  const resData = res.data;

  if (resData.result) {
    return {
      type: 'GET_MESSAGES',
      messageList: resData.data,
    } as IGetMessagesResponse;
  }
  return {
    type: 'ERROR',
    message: resData.error,
  } as INetworkError;
};

const removeMessage = async (companyId: string, uid: string) => {
  const res = await api.delete<IResponse<void>>(
    `/messages/${companyId}/${uid}`
  );
  const resData = res.data;

  if (resData.result) {
    return {
      type: 'REMOVE_MESSAGE',
    } as IRemoveMessageResponse;
  }
  return {
    type: 'ERROR',
    message: resData.error,
  } as INetworkError;
};

const clear = async () => {
  const res = await api.delete<IResponse<void>>('/messages');
  const resData = res.data;

  if (resData.result) {
    return {
      type: 'CLEAR_MESSAGES',
    } as IClearMessagesResponse;
  }
  return {
    type: 'ERROR',
    message: resData.error,
  } as INetworkError;
};

const subscribe = async (systemName: string, companyId: string) => {
  const res = await api.get<IResponse<IMessage[]>>(
    `/messages/subscribe/${companyId}/${systemName}`
  );
  const resData = res.data;

  if (resData.result) {
    return {
      type: 'SUBSCRIBE',
      messageList: resData.data,
    } as ISubscribeResponse;
  }
  return {
    type: 'ERROR',
    message: resData.error,
  } as INetworkError;
};

const publish = async (
  companyId: string,
  consumer: string,
  message: IMessage['body']
) => {
  const body = { head: { companyId, consumer }, message };
  const res = await api.post<IResponse<IMessageInfo>>(
    `/messages/publish/${companyId}`,
    body
  );
  const resData = res.data;

  if (resData.result) {
    return {
      type: 'PUBLISH',
      uid: resData.data?.uid,
      date: resData.data?.date,
    } as IPublishResponse;
  }
  return {
    type: 'ERROR',
    message: resData.error,
  } as INetworkError;
};

export default {
  sendMessages,
  getMessages,
  removeMessage,
  clear,
  subscribe,
  publish,
};
