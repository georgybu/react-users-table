import { UsersData } from './../../interfaces/core.interfaces';
import { SEARCH_USERS, SET_SELECTED_USER_DATA, SET_USERS_DATA, SORT_USERS, UPDATE_USER } from "../constants/users.constants";

const initialState = {
  users: [],
  initialUsers: [],
  sortBy: '',
  sortDir: '',
  selectedUser: {},
  selectedUserId: null
}

const users = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USERS_DATA: 
        return {
            ...state,
           users: action.payload,
           initialUsers: action.payload
        }
    case SEARCH_USERS:
        const { query } = action.payload;
        const filteredUsers = query ? searchUsers(state.users, query) : state.initialUsers
        return {
            ...state,
            users: filteredUsers,
    }
    case SORT_USERS:
        const { sortData } = action.payload;
        const sortedUsers = sortUsers(state.users, sortData);
        return {
            ...state,
            users: sortedUsers,
            sortDir: sortData.sortDir,
            sortBy: sortData.sortBy
        }
    case SET_SELECTED_USER_DATA: 
        const { user } = action.payload;
        return {
            ...state,
            selectedUser: user,
            selectedUserId: user.id
        }
    case UPDATE_USER: 
        const { updatedUser } = action.payload;
        
        const editedUserIndex: number = state.users.findIndex(
            (user: UsersData) => user.id === updatedUser.id,
        );

        return {
            ...state,
            selectedUser: updatedUser,
            users: [
                ...state.users.slice(0, editedUserIndex),
                updatedUser,
                ...state.users.slice(editedUserIndex + 1),
            ],
        };
    default:
      return state
  }
}

function sortUsers(users: UsersData[], sortData: {sortBy: string, sortDir: string}) {
    const sortedList = [...users];
    const newOrder = sortData.sortDir;
    const sortValue = (v1: any, v2: any) => {
      if (sortData.sortBy === 'id') return v1.id - v2.id;
      return (v1[sortData.sortBy] ?? '')
        .toLowerCase()
        .localeCompare((v2[sortData.sortBy] ?? '').toLowerCase())
    }
    if (newOrder === "ASC") {
      sortedList.sort((a, b) => sortValue(a, b));
    } else {
      sortedList.sort((a, b) => sortValue(b, a));
    }
    return sortedList;
}

function searchUsers(users: UsersData[], query: string): UsersData[] {
    const filteredUsers = !query
      ? users
      : users.filter((user: UsersData) => {
        const userValues = Object.entries(user)
            .filter((field) => field[0] !== 'id')
            .map((field) => field[1])
  
        const res = userValues.some((val: string) =>
            val.toLowerCase().includes(query?.toLowerCase()),
          )
          return res
        })
  
    return filteredUsers
}


export default users
