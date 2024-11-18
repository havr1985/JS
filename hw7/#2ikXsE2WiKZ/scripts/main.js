function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(1, "Олександр", "Шевченко", "olexandr.shevchenko@example.com", "+380500000001"),
    new User(2, "Марія", "Коваль", "maria.koval@example.com", "+380500000002"),
    new User(3, "Іван", "Бондар", "ivan.bondar@example.com", "+380500000003"),
    new User(4, "Анастасія", "Гончар", "anastasiya.gonchar@example.com", "+380500000004"),
    new User(5, "Дмитро", "Кравець", "dmytro.kravets@example.com", "+380500000005"),
    new User(6, "Катерина", "Лисенко", "kateryna.lysenko@example.com", "+380500000006"),
    new User(7, "Олег", "Мельник", "oleg.melnyk@example.com", "+380500000007"),
    new User(8, "Юлія", "Савченко", "yuliya.savchenko@example.com", "+380500000008"),
    new User(9, "Віктор", "Романюк", "viktor.romanyuk@example.com", "+380500000009"),
    new User(10, "Наталія", "Черненко", "nataliya.chernenko@example.com", "+380500000010"),
]

const filteredUsers = users.filter(user => user.id % 2 === 0);
console.log(filteredUsers);