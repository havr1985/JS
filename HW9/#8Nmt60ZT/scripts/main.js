// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

const block = document.createElement('div');

block.classList.add('wrap', 'collapse', 'alpha', 'beta');
block.style.background = 'blue';
block.style.color = 'yellow';
block.style.fontSize = '30px';
block.textContent = 'I am BLOCK!'

document.body.appendChild(block);

const clonedBlock = block.cloneNode(true);

clonedBlock.textContent = 'I am CLONED BLOCK!!!';

document.body.appendChild(clonedBlock);
