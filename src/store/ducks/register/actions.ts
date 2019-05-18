import { action } from 'typesafe-actions';
import { RegisterTypes, RequestData } from './types';

export const loadRequest = (data: RequestData) => action(RegisterTypes.LOAD_REQUEST, data);

export const loadSuccess = () => action(RegisterTypes.LOAD_SUCCESS);

export const loadFailure = () => action(RegisterTypes.LOAD_FAILURE);