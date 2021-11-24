const initialState = {
    searchResult: []
}
const SearchReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_SEARCH_RESULT':
            return {
                ...state,
                searchResult: action.result
            }
        default:
            return state;
    }

}
export default SearchReducer;