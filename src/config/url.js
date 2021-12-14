let serviceUrl = "https://cs5610-final-node-server.herokuapp.com";

if (process.env.NODE_ENV !== 'production') {
    serviceUrl = 'http://localhost:4000'
}
export const PROFILE_API = `${serviceUrl}/api/user/`;
export const REVIEW_API = `${serviceUrl}/api/reviews/`;

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
            'x-rapidapi-key': '19226f026bmshe70ec2435dd1896p1f35dfjsn6e6de2033561'
        }
    },

    productDetail: {
        method: 'GET',
        url: `https://amazon24.p.rapidapi.com/api/product/{product-id}`,
        params: {country: 'US'},
        headers: {
            'x-rapidapi-host': 'amazon24.p.rapidapi.com',
            'x-rapidapi-key': '19226f026bmshe70ec2435dd1896p1f35dfjsn6e6de2033561'
        }
    },

    productReview: {
        method: 'GET',
        url: `https://amazon24.p.rapidapi.com/api/review/:productId`,
        params: {country: 'US', page: '1'},
        headers: {
            'x-rapidapi-host': 'amazon24.p.rapidapi.com',
            'x-rapidapi-key': '19226f026bmshe70ec2435dd1896p1f35dfjsn6e6de2033561'
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
        url: `${serviceUrl}/api/getAllOrders`
    },


}
export default urls;

