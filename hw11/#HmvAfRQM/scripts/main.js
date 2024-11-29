const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

fetch('https://dummyjson.com/carts?limit=50')
    .then(res => res.json())
    .then(({carts}) => {
        for (const cart of carts) {
            const cartDiv = document.createElement('div');
            cartDiv.classList.add('cart');
            container.appendChild(cartDiv);
            const {id, products, total, discountedTotal, userId, totalProducts, totalQuantity } = cart;

            const idPar = document.createElement('p');
            idPar.innerText = `ID: ${id}`;

            const productList = document.createElement('ul');
            productList.innerText = 'Products:'

            for (const product of products) {
                const item = document.createElement('li');
                item.innerText = `${product.title}`;
                productList.appendChild(item);
            }

            const totalPar = document.createElement('p');
            totalPar.innerText = `Total: ${total}`;
            const discountedTotalPar = document.createElement('p');
            discountedTotalPar.innerText = `Discounted total: ${discountedTotal}`;
            const userIdPar = document.createElement('p');
            userIdPar.innerText = `UserID: ${userId}`;
            const totalProductsPar = document.createElement('p');
            totalProductsPar.innerText = `Total Products: ${totalProducts}`;
            const totalQualityPar = document.createElement('p');
            totalQualityPar.innerText = `Total quantity: ${totalQuantity}`;

            cartDiv.append(idPar, productList, totalPar, discountedTotalPar, userIdPar, totalProductsPar, totalQualityPar);
        }
    });