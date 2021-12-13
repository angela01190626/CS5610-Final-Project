
const initialState = {}

const user = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH-USER':
            return (action.profile);
        case 'SAVE-USER': {
            return (action.profile);
        }
        default:
            return(state);
    }
};

export default user;



