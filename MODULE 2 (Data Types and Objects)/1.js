// Write the code, one line for each action:
// a) Create an empty object user.
// b) Add the property name with the value John.
// c) Add the property surname with the value Smith.
// d) Change the value of the name to Pete.
// e) Remove the property name from the object

let user = {
    name: "John",
    surName: "Smith"
}
user.name = "Pete";
console.log(user.name)

delete user.name;

console.log(user)