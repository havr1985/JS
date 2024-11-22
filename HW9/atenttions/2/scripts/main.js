const blocks = document.querySelectorAll('.block');

let maxHeight = 0;
for (const block of blocks) {
    const height = block.offsetHeight;
    if (height > maxHeight) {
        maxHeight = height
    }
}
console.log(maxHeight);

for (const block of blocks) {
    block.style.height = `${maxHeight}px`;
}