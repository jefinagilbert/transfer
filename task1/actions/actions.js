export function addUser(users){
    return{
        type : 'USERS',
        users
    }
}

export function addCurrentUser(currentUser){
    return{
        type : 'CURRENTUSER',
        currentUser
    }
}