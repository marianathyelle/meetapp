export enum RegisterTypes {
  LOAD_REQUEST = 'register/LOAD_REQUEST',
  LOAD_SUCCESS = '@register/LOAD_SUCCESS',
  LOAD_FAILURE = '@register/LOAD_FAILURE',
};

export interface RequestData {
  name: string;
 	email: string;
 	password: string;
 	preferences: string;
}

export interface ResponseData {
  status: string;
}

export interface RegisterState {
  data: ResponseData;
  loading: boolean;
  error: boolean;
}