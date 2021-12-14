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
export function clearUser(){
    return{
        type: 'CLEAR-USER'
    }
}
export default {getUserData};