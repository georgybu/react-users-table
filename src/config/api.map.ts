const url = 'https://test-api-server.herokuapp.com'
const prefix = `${url}/`

export const apiMap = {
    login: {
        method: 'post',
        url: `${prefix}login`,
    },
    getUsers: {
        method: 'get',
        url: `${prefix}users`
    }
}
