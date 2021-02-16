import { UsersData } from './../../interfaces/core.interfaces';
import { apiMap } from './../../config/api.map';
import { SEARCH_USERS, SET_USERS_DATA, SORT_USERS, SET_SELECTED_USER_DATA } from "../constants/users.constants";
import api from '../../utils/apiService';
import axios from 'axios';

export const setUsersData = (data: any) => ({
    type: SET_USERS_DATA,
    payload: data
})

export const searchUsers = (query: string) => ({
    type: SEARCH_USERS,
    payload: {
        query
    },
})

export const sortUsers = (sortData: {sortBy: string, sortDir: string}) => ({
    type: SORT_USERS,
    payload: {
        sortData
    },
})

export const setSelectedUser = (user: UsersData) => ({
    type: SET_SELECTED_USER_DATA,
    payload: {
        user
    }
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

export const getUserById = (id: any) => (dispatch: any) => {
    const { url } = apiMap.getUsers;
    const urlReq = `${url}/${id}`;
    axios.get(urlReq)
        .then((res: any) => {
        const data = res.data;
        dispatch(setSelectedUser(data))
    }).catch(err => console.log(err))
}


