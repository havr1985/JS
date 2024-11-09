function printList(text, items) {
    document.write(`<ul>`);
    for (let i = 0; i < items; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
printList('Hello World!', 7);