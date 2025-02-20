
import { IReferences } from './data';
import { IModels } from './model';
import { IDocument } from './document';

import { IApiConfig } from '@lib/common-client-types';

export interface IServiceState {
  isLoading: boolean;
  serverUrl?: IApiConfig;
  deviceId?: string;
  storagePath?: string;
}

export interface IForm {
  [name: string]: unknown;
}

export interface IForms<T = IForm> {
  [name: string]: T;
}

export interface IViewParam {
  [name: string]: unknown;
}

export interface ICompanySetting {
  [name: string]: unknown;
}

export interface ICompanySettings {
  [name: string]: ICompanySetting;
}

export interface IWeightCodeSettings {
  weightCode: string;
  code: number;
  weight: number;
}

export interface IAppSettings {
  synchronization?: boolean;
  autodeletingDocument?: boolean;
  barcodeReader?: boolean;
  darkTheme?: boolean;
}

export interface IViewParams {
  [name: string]: IViewParam;
}

export interface IAppState {
  settings?: IAppSettings;
  companySettings?: ICompanySettings;
  documents?: IDocument[];
  references?: IReferences;
  forms?: IForms;
  models?: IModels;
  viewParams: IViewParams;
}
