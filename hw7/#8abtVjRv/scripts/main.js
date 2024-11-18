class Client {
    constructor(id, name, surname, email, phone, order = []) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
    new Client(3, "Олександр", "Шевченко", "olexandr.shevchenko@example.com", "+380500000001", ['tv', 'phone', 'car']),
    new Client(2, "Марія", "Коваль", "maria.koval@example.com", "+380500000002",['tv', 'phone', 'car', 'mouse']),
    new Client(1, "Іван", "Бондар", "ivan.bondar@example.com", "+380500000003", ['tv']),
    new Client(4, "Анастасія", "Гончар", "anastasiya.gonchar@example.com", "+380500000004", ['tv', 'phone', 'car']),
    new Client(10, "Дмитро", "Кравець", "dmytro.kravets@example.com", "+380500000005", ['tv', 'phone']),
    new Client(6, "Катерина", "Лисенко", "kateryna.lysenko@example.com", "+380500000006", ['tv', 'phone', 'car', 'keyboard', 'mouse']),
    new Client(7, "Олег", "Мельник", "oleg.melnyk@example.com", "+380500000007", ['tv', 'phone']),
    new Client(8, "Юлія", "Савченко", "yuliya.savchenko@example.com", "+380500000008", ['tv', 'phone', 'car', 'keyboard']),
    new Client(9, "Віктор", "Романюк", "viktor.romanyuk@example.com", "+380500000009", ['tv', 'phone', 'car']),
    new Client(5, "Наталія", "Черненко", "nataliya.chernenko@example.com", "+380500000010", ['tv']),
]

const sortedClients = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortedClients);