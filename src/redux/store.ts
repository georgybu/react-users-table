import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk'

import {rootReducer} from './root.reducer'

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;
export const dispatch = store.dispatch;
export const getState = store.getState;
