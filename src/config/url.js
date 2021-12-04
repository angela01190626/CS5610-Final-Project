let serviceUrl = "https://cs5610-final-node-server.herokuapp.com";

if (process.env.NODE_ENV !== 'production') {
  serviceUrl = 'http://localhost:5000'
}

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
          'x-rapidapi-key': 'b66d70dd24msh3923fbc8c0d09dap1dca70jsn2d8b5647d281'
        }
      },

      productDetail: {
        method: 'GET',
        url: `https://amazon24.p.rapidapi.com/api/product/`,
        params: {country: 'US'},
        headers: {
          'x-rapidapi-host': 'amazon24.p.rapidapi.com',
          'x-rapidapi-key': 'b66d70dd24msh3923fbc8c0d09dap1dca70jsn2d8b5647d281'
        }
      },

      productReview: {
        method: 'GET',
        url: `https://amazon24.p.rapidapi.com/api/review/:productId`,
        params: {country: 'US', page: '1'},
        headers: {
          'x-rapidapi-host': 'amazon24.p.rapidapi.com',
          'x-rapidapi-key': 'b66d70dd24msh3923fbc8c0d09dap1dca70jsn2d8b5647d281'
        }
      },
      
      productCategories: {
        method: 'GET',
        url: `${serviceUrl}/api/getDepartments`
      },

      getTrendingItems: {
        method: 'GET',
        url: `${serviceUrl}/api/trendingItems`
      }

}
export default urls;