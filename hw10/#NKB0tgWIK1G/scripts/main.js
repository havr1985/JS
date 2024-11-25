const array = Array.from({ length: 100 }, (_, i) =>
    ({ id: i + 1, name: `Name ${i + 1}` }));
console.log(array);

const list = document.getElementById('list');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentPage = 1;
const limit = 10;

function pagination(page) {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    list.innerText = '';

    for (let i = startIndex; i < endIndex && i < array.length; i++) {
        const listItem = document.createElement('li');
        listItem.innerText = `ID: ${array[i].id} Name: ${array[i].name}`;
        list.appendChild(listItem);
    }

    prevBtn.disabled = page === 1;
    nextBtn.disabled = page === Math.ceil(array.length / limit);
}

prevBtn.onclick = function () {
    if (currentPage > 1) {
        currentPage--;
        pagination(currentPage);
    }
};

nextBtn.onclick = function ()  {
    if (currentPage < Math.ceil(array.length / limit)) {
        currentPage++;
        pagination(currentPage);
    }
};

pagination(currentPage);