export default function allUsersReducer(users=[], action){
    switch(action.type){
        case 'USERS':
            return [...users, action.users]
        default:
            return users
    }
}