/* Examples:
friend(["Ryan", "Kieran", "Jason", "Yous"]) => ["Ryan", "Yous"];
friend(["Ryan", "Kieran", "Mark"]) => ["Ryan", "Mark"];
TODO: 
-Make a program that filters a list of strings and returns a list with only your friends.
-If a name has exactly 4 letters in it,it has to be a friend of yours
-Otherwise you can be sure he's not...
-Keep the original order of the names in the output. 
-Control the repeating names
-Control the numbers*/

import {friend, checksString} from "../index"

// Tests for friend()

test("Filters a list of strings and returns a list with only your friends", () => {
    expect(friend(["Ryan", "Kieran", "Jason", "Yous"])).toStrictEqual(["Ryan", "Yous"]);
});
test("Filters a list of strings and returns a list with only your friends", () => {
    expect(friend(["PepitoBotella", "Juan", "John", "John", "Carlitos"])).toStrictEqual(["Juan", "John"]);
});
test("Filters a list of strings and returns a list with only your friends", () => {
    expect(friend(["Ryan", "Kieran", "Mark"])).toStrictEqual(["Ryan", "Mark"]);
});
test("Filters a list of strings and returns a list with only your friends", () => {
    expect(friend(["Ryan", "Kieran", "Fer", "Fernando", "Jason", "Yous"])).toStrictEqual(["Ryan", "Yous"]);
});
test("Filters a list of strings and returns a list with only your friends", () => {
    expect(friend(["Ryan", "Kieran", "Jason", "Yous", "Joey"])).toStrictEqual(["Ryan", "Yous", "Joey"]);
});


// Tests for checksString()
test("Checks the value of a string and returns false if contains a number, a empty string...", () => {
    expect(checksString("abcde5")).toStrictEqual(false);
});
test("Checks the value of a string and returns false if contains a number, a empty string...", () => {
    expect(checksString("")).toStrictEqual(false);
});
test("Checks the value of a string and returns false if contains a number, a empty string...", () => {
    expect(checksString("p0p")).toStrictEqual(false);
});
test("Checks the value of a string and returns false if contains a number, a empty string...", () => {
    expect(checksString("er3rer")).toStrictEqual(false);
});
test("Checks the value of a string and returns false if contains a number, a empty string...", () => {
    expect(checksString("Ryan")).toStrictEqual(true);
});