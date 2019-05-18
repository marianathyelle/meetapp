import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { RegisterState } from './ducks/register/types';
import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface AplicationState {
  register: RegisterState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<AplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store; 