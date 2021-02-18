import {combineReducers, Reducer} from 'redux';
import loginReducer from './reducers/login.reducer';
import users from './reducers/users.reducer';

const appReducer = combineReducers({
    login: loginReducer as Reducer<any, any>,
    users: users as Reducer<any, any>,
});

export const rootReducer = (state: any, action: any) => {
    if (action.type === 'LOGOUT') {
        state = undefined;
    }

    return appReducer(state, action)
}
export type RootState = ReturnType<typeof rootReducer>;
