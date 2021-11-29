const initialState = {
    isLoading: false
}
const AppReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'IS_LOADING':
            return {
                ...state,
                isLoading: action.loading
            }
        default:
            return state;
    }

}
export default AppReducer;