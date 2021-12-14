
const initialState = {}

const user = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH-USER':
            return (action.user);
        case 'SAVE-USER': {
            return action.user;
        }
        case 'CLEAR-USER': {
            return {}
        }
        default:
            return(state);
    }
};

export default user;



