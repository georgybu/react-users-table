import { apiMap } from './../../config/api.map';
import { SEARCH_USERS, SET_USERS_DATA } from "../constants/users.constants";
import api from '../../utils/apiService';

export const setUsersData = (data: any) => ({
    type: SET_USERS_DATA,
    payload: data
})

export const getUsersData = () => (dispatch: any) => {
    const { method, url } = apiMap.getUsers;
    api({
      method,
      url,
    }).then((res: any) => {
        const data = res.data;
        dispatch(setUsersData(data))
    }).catch(err => console.log(err))
}


export const searchUsers = (query: string) => ({
    type: SEARCH_USERS,
    payload: {
        query
    },
})
