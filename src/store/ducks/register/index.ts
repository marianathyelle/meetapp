import { RegisterState, ResponseData, RegisterTypes } from './types';
import { Reducer } from 'redux';

const INITIAL_STATE: RegisterState = {
  data: {} as ResponseData,
  loading: false,
  error: false,
};

const reducer: Reducer<RegisterState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RegisterTypes.LOAD_REQUEST: 
      return { ...state, loading: true };
    case RegisterTypes.LOAD_SUCCESS: 
      return { ...state, loading: false, error: false };
    case RegisterTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: {} as ResponseData };
    default: 
      return state;
  } 
}

export default reducer;