export function getUserData(user) {
    return {
        type: 'FETCH-USER',
        user
    }
}

export function setUserData(user){
    return{
        type: 'SAVE-USER',
        user
    }
}
export default {getUserData};