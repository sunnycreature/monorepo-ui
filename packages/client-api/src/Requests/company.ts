import { ICompany, IResponse, IUser } from '@lib/types';

import {
  IAddCompanyResponse,
  IGetCompaniesResponse,
  IGetCompanyResponse,
  IGetCompanyUsersResponse,
  INetworkError,
  IRemoveCompanyResponse,
  IUpdateCompanyResponse,
} from '../queryTypes';

import { api } from '../params';

const addCompany = async (title: string, externalId: string) => {
  const body = {
    title,
    externalId,
  };
  const res = await api.post<IResponse<string>>('/companies', body);
  const resData = res.data;

  if (resData.result) {
    return {
      type: 'ADD_COMPANY',
      companyId: resData.data,
    } as IAddCompanyResponse;
  }
  return {
    type: 'ERROR',
    message: resData.error,
  } as INetworkError;
};

const getCompanies = async () => {
  const res = await api.get<IResponse<ICompany[]>>('/companies');
  const resData = res.data;

  if (resData.result) {
    return {
      type: 'GET_COMPANIES',
      companies: resData.data,
    } as IGetCompaniesResponse;
  }
  return {
    type: 'ERROR',
    message: resData.error,
  } as INetworkError;
};

const getCompany = async (companyId: string) => {
  const res = await api.get<IResponse<ICompany>>(`/companies/${companyId}`);
  const resData = res.data;

  if (resData.result) {
    return {
      type: 'GET_COMPANY',
      company: resData.data,
    } as IGetCompanyResponse;
  }
  return {
    type: 'ERROR',
    message: resData.error,
  } as INetworkError;
};

const updateCompany = async (company: Partial<ICompany>) => {
  const res = await api.patch<IResponse<string>>(
    `/companies/${company.id}`,
    company
  );
  const resData = res.data;

  if (resData.result) {
    return {
      type: 'UPDATE_COMPANY',
      companyId: resData.data,
    } as IUpdateCompanyResponse;
  }
  return {
    type: 'ERROR',
    message: resData.error,
  } as INetworkError;
};

const getUsersByCompany = async (companyId: string) => {
  const res = await api.get<IResponse<IUser[]>>(
    `/companies/${companyId}/users`
  );
  const resData = res.data;

  if (resData.result) {
    return {
      type: 'GET_USERS_BY_COMPANY',
      users: resData.data,
    } as IGetCompanyUsersResponse;
  }
  return {
    type: 'ERROR',
    message: resData.error,
  } as INetworkError;
};

const removeCompany = async (companyId: string) => {
  const res = await api.delete<IResponse<void>>(`/companies/${companyId}`);
  const resData = res.data;

  if (resData.result) {
    return {
      type: 'REMOVE_COMPANY',
    } as IRemoveCompanyResponse;
  }
  return {
    type: 'ERROR',
    message: resData.error,
  } as INetworkError;
};

export default {
  addCompany,
  getCompanies,
  getCompany,
  updateCompany,
  getUsersByCompany,
  removeCompany,
};
