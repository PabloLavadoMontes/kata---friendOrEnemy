"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checksString = exports.friend = void 0;
/**
 * "Filters a list of strings and returns a list with only your friends"
 * @param {string[]} friends
 * @returns {string[]} realFriends
 */
function friend(friends) {
    let realFriends = [];
    friends.forEach(friend => {
        if (checksString(friend) && realFriends.includes(friend) === false) {
            realFriends.push(friend);
        }
    });
    return realFriends;
}
exports.friend = friend;
/**
 * Checks the value of a string
 * @param {string} name
 * @returns {boolean}
 */
function checksString(name) {
    const regex = /^[a-zA-Z]+$/;
    return name.length !== 4 || !regex.test(name) ? false : true;
}
exports.checksString = checksString;
//# sourceMappingURL=index.js.map