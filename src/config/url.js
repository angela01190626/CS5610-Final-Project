const urls = {
    productSearch: {
        method: 'GET',
        url: 'https://amazon24.p.rapidapi.com/api/product',
        params: {
          keyword: '<placeholder>',
          country: 'US',
          page: '1',
          filter: 'aHR0cHM6Ly93d3cuYW1hem9uLmNvbS9zP2s9aXBob25lJnJoPXBfbl9jb25kaXRpb24tdHlwZSUzQVVzZWQmZGMmcWlkPTE2MTI0MTg5NTMmcmVmPXNyX25yX3Bfbl9jb25kaXRpb24tdHlwZV8y'
        },
        headers: {
          'x-rapidapi-host': 'amazon24.p.rapidapi.com',
          'x-rapidapi-key': '63f2092120mshce23dfec5b77b2bp19dcc3jsnd0de260cad64'
        }
      },

      productDetail: {
        method: 'GET',
        url: `https://amazon24.p.rapidapi.com/api/product/:productId`,
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
      }
}
export default urls;