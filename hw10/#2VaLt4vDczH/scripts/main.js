const counterDiv = document.getElementById('counter');

let count = localStorage.getItem('counter') || 0;

count++;

counterDiv.innerText = `${count}`

localStorage.setItem('counter', count);