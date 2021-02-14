import { LOGIN } from "../constants/login.constants"

const initialState = {
  isLoggedIn: false,
  token: null
}

const users = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN: 
        return {
            ...state,
            isLoggedIn: true,
            token: action.payload
        }
    default:
      return state
  }
}


export default users
