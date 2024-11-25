const div = document.getElementById('price');
const startPrice = +div.outerText;

const dateNow = Date.now();
console.log(dateNow)

let price = parseInt(localStorage.getItem('price'), 10) || startPrice;
let lastUpdate = parseInt(localStorage.getItem('lastUpdate'), 10) || 0;

if (dateNow - lastUpdate > 10000) {
    price += 10;
    localStorage.setItem('lastUpdate', dateNow.toString());
    localStorage.setItem('price', price);
}
document.getElementById('price').textContent = price;