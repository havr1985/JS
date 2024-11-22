const itemArr = ['Main','Products','About us','Contacts'];

const ul = document.createElement('ul');
document.body.appendChild(ul);

for (const item of itemArr) {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
}