let user = { name: "John Smith", age: 35 };

let jsonString = JSON.stringify(user);

let anotherUser = JSON.parse(jsonString);

console.log(jsonString);    // {"name":"John Smith","age":35}
console.log(anotherUser);   // { name: 'John Smith', age: 35 }
