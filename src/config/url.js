const serviceUrl = "https://cs5610-final-node-server.herokuapp.com";
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
          'x-rapidapi-key': '63f2092120mshce23dfec5b77b2bp19dcc3jsnd0de260cad64'
        }
      },

      productDetail: {
        method: 'GET',
        url: `https://amazon24.p.rapidapi.com/api/product/`,
        params: {country: 'US'},
        headers: {
          'x-rapidapi-host': 'amazon24.p.rapidapi.com',
          'x-rapidapi-key': '63f2092120mshce23dfec5b77b2bp19dcc3jsnd0de260cad64'
        }
      },

      productReview: {
        method: 'GET',
        url: `https://amazon24.p.rapidapi.com/api/review/:productId`,
        params: {country: 'US', page: '1'},
        headers: {
          'x-rapidapi-host': 'amazon24.p.rapidapi.com',
          'x-rapidapi-key': '63f2092120mshce23dfec5b77b2bp19dcc3jsnd0de260cad64'
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