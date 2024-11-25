function addToLocalStorage(arrayName, objToAdd) {
    const existingArray = JSON.parse(localStorage.getItem(arrayName)) || [];

    existingArray.push(objToAdd);

    localStorage.setItem(arrayName, JSON.stringify(existingArray));
}

addToLocalStorage('users', { id: 1, name: 'John', age: 25 });
addToLocalStorage('users', { id: 2, name: 'Sarah', age: 30 });