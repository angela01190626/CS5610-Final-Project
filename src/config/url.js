let serviceUrl = "https://cs5610-final-node-server.herokuapp.com";

if (process.env.NODE_ENV !== 'production') {
    serviceUrl = 'http://localhost:5000'
}
export const PROFILE_API = `${serviceUrl}/api/user/`;
export const REVIEW_API = `${serviceUrl}/api/reviews/`;
const API_KEY = "fffb52e2c6msh7bf751858ca8521p16a129jsnb2cb8f33e3b9";
const urls = {
    productSearch: {
        method: 'GET',
        url: 'https://amazon24.p.rapidapi.com/api/product',
        params: {
            keyword: '<placeholder>',
            country: 'US',
            page: '1',
        },
        headers: {
            'x-rapidapi-host': 'amazon24.p.rapidapi.com',
            'x-rapidapi-key': API_KEY
        }
    },

    productDetail: {
        method: 'GET',
        url: `https://amazon24.p.rapidapi.com/api/product/{product-id}`,
        params: {country: 'US'},
        headers: {
            'x-rapidapi-host': 'amazon24.p.rapidapi.com',
            'x-rapidapi-key': API_KEY
        }
    },

    productCategories: {
        method: 'GET',
        url: `${serviceUrl}/api/getDepartments`
    },

    getTrendingItems: {
        method: 'GET',
        url: `${serviceUrl}/api/trendingItems`
    },

    getSportsItems: {
        method: 'GET',
        url: `${serviceUrl}/api/sportsItems`
    },

    getComputerItems: {
        method: 'GET',
        url: `${serviceUrl}/api/computerPeripherals`
    },
    updateProfile: {
        url: `${serviceUrl}/api/user/`
    },

    getReviews: {
        method: 'GET',
        url: `${serviceUrl}/api/reviews/`
    },
    followUser: {
        method: 'POST',
        url: `${serviceUrl}/api/follow/`
    },
    getProfile: {
        method: 'GET',
        url: `${serviceUrl}/api/user/`
    },
    getUserReviews: {
        method: 'GET',
        url: `${serviceUrl}/api/reviews/user/`
    },
    isUserFollowing: {
        method: 'GET',
        url: `${serviceUrl}/api/isFollowing`
    },
    getAllOrders: {
        method: 'GET',
        url: `${serviceUrl}/api/orders`
    },
    updateOrderStatus: {
        method: 'PUT',
        url: `${serviceUrl}/api/order/{order-id}`
    },
    updateUserCart: {
        method: 'PUT',
        url: `${serviceUrl}/api/cart/{email}`
    },


}
export default urls;

