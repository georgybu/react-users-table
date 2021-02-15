import { UsersData } from './../../interfaces/core.interfaces';
import { SEARCH_USERS, SET_USERS_DATA } from "../constants/users.constants";

const initialState = {
  users: [],
  initialUsers: []
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
        const { query } = action.payload
        const filteredUsers = query ? searchUsers(state.users, query) : state.initialUsers
        return {
            ...state,
            users: filteredUsers,
    }
    default:
      return state
  }
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
