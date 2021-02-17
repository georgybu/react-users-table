export const url = 'https://test-api-server.herokuapp.com'

export const prefix = `${url}/`

export const apiMap = {
    login: {
        method: 'post',
        url: `${prefix}login`,
    },
    getUsers: {
        method: 'get',
        url: `${prefix}users`
    },
    getUserById: {
        method: 'get',
        url: `${prefix}users/<%= id %>`
    },
    updateUser: {
        method: 'post',
        url: `${prefix}users/<%= id %>`
    }
}
