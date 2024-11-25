const divElement = document.getElementById('text');
const button = document.getElementsByTagName('button')[0];

button.onclick = function (ev) {
    divElement.style.display = 'none';
};