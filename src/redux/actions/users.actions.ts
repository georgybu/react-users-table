import {UsersData} from './../../interfaces/core.interfaces';
import {apiMap} from './../../config/api.map';
import {
    SEARCH_USERS,
    SET_SELECTED_USER_DATA,
    SET_USERS_DATA,
    SORT_USERS,
    UPDATE_USER
} from "../constants/users.constants";
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

export const sortUsers = (sortData: { sortBy: string, sortDir: string }) => ({
    type: SORT_USERS,
    payload: {
        sortData
    },
})

export const setUpdatedUser = (updatedUser: UsersData) => ({
    type: UPDATE_USER,
    payload: {
        updatedUser
    },
})

export const setSelectedUser = (user: UsersData) => ({
    type: SET_SELECTED_USER_DATA,
    payload: {
        user
    }
})

export const getUsersData = () => (dispatch: any) => {
    const {method, url} = apiMap.getUsers;
    api({
        method,
        url,
    }).then((res: any) => {
        const data = res.data;
        dispatch(setUsersData(data))
    }).catch(err => console.log(err))
}

export const getUserById = (id: number) => (dispatch: any) => {
    const {method, url} = apiMap.getUserById;
    api({
        method,
        url,
        urlParams: {id}
    }).then((res: any) => {
        const data = res.data;
        dispatch(setSelectedUser(data))
    }).catch(err => console.log(err))
}

export const updateUserById = (userData: UsersData, userDataId: number) => (dispatch: any) => {
    console.log(userData, userDataId);
    const {method, url} = apiMap.updateUser;
    api({
        method,
        url,
        urlParams: {id: userDataId},
        data: {...userData}
    }).then((res: any) => {
        const data = res.data;
        dispatch(setUpdatedUser(data))
    }).catch(err => console.log(err))
}


