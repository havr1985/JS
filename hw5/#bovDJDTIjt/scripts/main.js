const printUsers = (users) => {
    for (let user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
}

const users = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Alice", age: 30 },
    { id: 3, name: "Bob", age: 22 },
    { id: 4, name: "Emily", age: 28 },
    { id: 5, name: "Michael", age: 35 }
];
printUsers(users);