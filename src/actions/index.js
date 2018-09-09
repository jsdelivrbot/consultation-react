export const USER_SELECTED = "USER_SECLECTED";

export function selectUser(user) {
    return {
        type : USER_SELECTED,
        payload : user
    }
    
}