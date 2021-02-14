import { SET_USERS_DATA } from "../constants/users.constants";

const initialState = {
  users: []
}

const users = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USERS_DATA: 
        return {
            ...state,
           users: action.payload
        }
    default:
      return state
  }
}


export default users
