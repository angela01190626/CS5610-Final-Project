import {useEffect} from "react";
import {PROFILE_API} from "../config/url";

let URL = 'https://cs5610-final-node-server.herokuapp.com/api'

// if (process.env.NODE_ENV !== 'production') {
//     URL = 'http://localhost:5000/api'
// }

export const login = (dispatch, user) =>
    fetch(`${URL}/login`, {
        method: 'POST',
        body: JSON.stringify(user),
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    })

export const register = (dispatch, user) =>
    fetch(`${URL}/register`, {
        method: 'POST',
        body: JSON.stringify(user),
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    })

export const profile = () =>
    fetch(`${URL}/profile`, {
        method: 'POST',
        credentials: 'include'
    })

export const logout = () =>
    fetch(`${URL}/logout`, {
        method: 'POST',
        credentials: 'include'
    })