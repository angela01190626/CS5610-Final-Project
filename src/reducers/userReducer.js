import userData from './data/user.json';

const user = (state = userData, action) => {
    switch (action.type) {
        case 'FETCH-USER':
            return (action.profile);
        default:
            return(state);
    }
};

export default user;



