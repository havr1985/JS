const input = document.getElementById('input');
const button = document.getElementsByTagName('button')[0];
const div = document.createElement('div');
document.body.appendChild(div);

button.onclick = function (ev) {
    const age = +input.value;
    if (age <= 0) {
        div.innerText = 'Age not correct';
    } else if (age < 18) {
        div.innerText = 'You are under 18 years old';
    } else {
        div.innerText = 'You are over 18 years old';
    }
}