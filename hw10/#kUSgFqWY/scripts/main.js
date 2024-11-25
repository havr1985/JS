const rowsInput = document.getElementById('rows');
const columnsInput = document.getElementById('columns');
const contentInput = document.getElementById('content');
const btn = document.getElementsByTagName('button')[0];

btn.onclick = function () {
    const table = document.createElement('table');
    document.body.appendChild(table);
    const rows = +rowsInput.value;
    const columns = +columnsInput.value;
    const content = contentInput.value;
    console.log(rows, columns, content);

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            const cell = document.createElement('td');
            cell.innerText = content;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}