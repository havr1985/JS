const printArrList = (array) => {
    document.write(`<ul>`);
    for (let item of array){
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

printArrList([1, false, 2, true, 'Hello']);