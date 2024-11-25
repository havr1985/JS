const input = document.getElementById('input');
const div = document.createElement('div');
document.body.appendChild(div)

input.oninput = function (){
    if (this.value <= 0) {
        div.innerText = 'Value not correct';
    } else {
        const pounds = +this.value * 2.20462;
        div.innerText = `Pounds: ${pounds}`
    }

}