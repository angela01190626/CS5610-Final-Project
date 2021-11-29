const initialState = {
    searchResult: [],
    searchQuery: {
        name: '',
        id: '',
        pageNum: 1
    }
}
const SearchReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_SEARCH_RESULT':
            return {
                ...state,
                searchResult: action.result
            }
        case 'GET_SEARCHED_VALUE':
            return {
                ...state,
                searchQuery: {
                    ...action.searchQuery
                }
            }
        default:
            return state;
    }

}
export default SearchReducer;