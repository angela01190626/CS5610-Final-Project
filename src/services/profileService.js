
let URL = 'https://cs5610-final-node-server.herokuapp.com/api'

if (process.env.NODE_ENV !== 'production') {
    URL = 'http://localhost:5000/api'
}

export const login = (dispatch, user) =>
    fetch(`${URL}/login`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })

export const register = (dispatch, user) =>
    fetch(`${URL}/register`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })

export const profile = (dispatch, session) =>
    fetch(`${URL}/profile`, {
        method: 'POST',
        body: JSON.stringify(session),
        headers: {
            'content-type': 'application/json'
        }
    })

export const logout = (dispatch, session) =>
    fetch(`${URL}/logout`, {
        method: 'POST',
        body: JSON.stringify(session),
        headers: {
            'content-type': 'application/json'
        }
    })