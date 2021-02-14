import api from '../../utils/apiService';
import { LOGIN } from '../constants/login.constants';
import { apiMap } from './../../config/api.map';
import { UserCredentials } from './../../interfaces/core.interfaces';

export const loginUser = (token: string) => ({
    type: LOGIN,
    payload: token
  })

export const login = (data: UserCredentials) => (dispatch: any) => {
	const { method, url } = apiMap.login;
    api({
      method,
      url,
      data: data,
    }).then((res: any) => {
        const token = res.data.token
        dispatch(loginUser(token));
    }).catch(err => console.log(err))
}