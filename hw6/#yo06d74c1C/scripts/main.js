let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(sort);

let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filter);

let addId = coursesAndDurationArray.map((value, index) => ({
    ...value,
    id: index + 1,
}));
console.log(addId)