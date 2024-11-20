function deepCopy(obj) {
    if (!obj) {
        return console.log(`${obj} not valid object `)
    }
        const newObject = JSON.parse(JSON.stringify(obj));
        console.log(newObject);

        let arrFn = [];
        for (const key in obj) {
            if (typeof obj[key] === 'function') {
                const fn = obj[key].bind({});
                arrFn.push({fn, key})
            }
            console.log(arrFn)
        }

        for (const item of arrFn) {
            newObject[item.key] = item.fn
        }
        console.log(newObject);
        return newObject
}

 deepCopy({
    id: 1,
    name: 'John',
     fn() {
        console.log('Hello')
     }
});

