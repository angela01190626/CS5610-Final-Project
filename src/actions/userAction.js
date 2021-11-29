export function getUserData(user) {
    return {
        type: 'FETCH-USER',
        user
    }
}
export default getUserData;