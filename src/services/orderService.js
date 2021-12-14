import axios from 'axios';


let URL = 'https://cs5610-final-node-server.herokuapp.com/api'

if (process.env.NODE_ENV !== 'production') {
    URL = 'http://localhost:5000/api'
}

export const newOrder = (order) =>
    axios.request(`${URL}/order`, {
    method: "POST",
    data: {
        order
    }
})