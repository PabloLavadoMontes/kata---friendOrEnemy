export {friend, checksString}

/**
 * "Filters a list of strings and returns a list with only your friends"
 * @param {string[]} friends 
 * @returns {string[]} realFriends
 */
function friend (friends: string[]): string[] {
    let realFriends: string[] = [];
    friends.forEach(friend => {
    if (checksString(friend) && !realFriends.includes(friend)) {
        realFriends.push(friend);
    }
    }) 
    return realFriends;
}

/**
 * Checks the value of a string
 * @param {string} name 
 * @returns {boolean} 
 */
function checksString (name: string): boolean {
    const regex: RegExp = /^[a-zA-Z]+$/;
    return !(name.length !== 4 || !regex.test(name));
}