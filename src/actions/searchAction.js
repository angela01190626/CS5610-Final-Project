export function getSearchResults(result) {
    return {
        type: 'GET_SEARCH_RESULT',
        result
    }
}

export function getSearchedValue(searchQuery) {
    return {
        type: 'GET_SEARCHED_VALUE',
        searchQuery
    }
}
export default getSearchResults;