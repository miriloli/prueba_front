let productsList = [];

//REQUEST PRODUCTS CONTROLLER
async function getAllProducts() {
    return await fetch('http://localhost:8000/api/products/get')
        .then(response => response.json())
        .then((responseJson) => {
            {
                console.log(responseJson);
                productsList = responseJson.products.data;
            }

        })
        .catch(error => console.error('Error:', error));
}

function createProductNode(product) {

    let item = document.createElement('li');
    let contenedorDiv = document.createElement('div');
    let category = document.createElement('p');
    let price = document.createElement('h4');
    let image = document.createElement('img');

    category.innerHTML = product.category;
    price.innerHTML = product.price;
    image.innerHTML = product.image;
    contenedorDiv.appendChild(category);
    contenedorDiv.appendChild(price);
    contenedorDiv.appendChild(image);
    item.appendChild(contenedorDiv);

    return item;
}
listaProductos = document.getElementById('productlist');

window.addEventListener('load', async () => {
    await getAllProducts()
    for (let i = 0; i < productsList.length; i++) {
        const productHTML = createProductNode(productsList[i]);
        console.log(productHTML);
        listaProductos.appendChild(productHTML);
    }
});




