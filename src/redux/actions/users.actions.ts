import { UsersData } from './../../interfaces/core.interfaces';
import { apiMap } from './../../config/api.map';
import { SEARCH_USERS, SET_USERS_DATA, SORT_USERS, SET_SELECTED_USER_DATA } from "../constants/users.constants";
import api from '../../utils/apiService';

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

export const getUserById = (id: number) => (dispatch: any) => {
    const { method, url } = apiMap.getUserById;
    api({
      method,
      url,
      urlParams: {id}
    }).then((res: any) => {
        const data = res.data;
        dispatch(setSelectedUser(data))
    }).catch(err => console.log(err))
}

// export const updateUserById = (id: number) => {}


