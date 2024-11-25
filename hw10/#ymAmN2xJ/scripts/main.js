const form = document.forms[0];
const div = document.createElement('div');
document.body.appendChild(div)

form.onsubmit = function (ev) {
    ev.preventDefault();
    if (!this.name.value || !this.surname.value || !this.age.value) {
        div.innerText = 'Please, fill out the form!'
        return;
    }
    if (+this.age.value <= 0) {
        div.innerText = 'Age not correct!'
        return;
    }
    const user = {
        name: this.name.value,
        surname: this.surname.value,
        age: this.age.value,
    }
    const userName = document.createElement('p');
    userName.innerText = `Name: ${user.name}`;
    const userSurname = document.createElement('p');
    userSurname.innerText = `Surname: ${user.surname}`;
    const userAge = document.createElement('p');
    userAge.innerText = `Age: ${user.age}`;
    div.append(userName, userSurname, userAge);
}