let productsList = [];

//REQUEST PRODUCTS CONTROLLER
async function getAllProducts() {
    return await fetch('http://localhost:8000/api/products/get')
        .then(response => response.json())
        .then((responseJson) => {
            {
                console.log(responseJson);
                productsList = responseJson.data;
            }

        })
        .catch(error => console.error('Error:', error));
}

function createProductNode(product) {

    let item = document.createElement('li');
    item.className = 'item';

    let contenedorDiv = document.createElement('div');
    contenedorDiv.className = 'card';

    let name = document.createElement('p');
    name.className = 'productName';
    name.innerHTML = product.name;

    let  price= document.createElement('h4');
    price.className = 'price';
    price.innerHTML = product.price+' $';

    let image = document.createElement('img');
    image.className = 'productIMG';
    image.src = product.image;
    
    
    

    contenedorDiv.appendChild(image);
    contenedorDiv.appendChild(name);
    contenedorDiv.appendChild(price);

    item.appendChild(contenedorDiv);

    return item;
}


listaProductos = document.getElementById('productlist');


function createAllProductsNodes(){
    for (let i = 0; i < productsList.length-11; i++) {
        const productHTML = createProductNode(productsList[i]);
        console.log(productHTML);
        listaProductos.appendChild(productHTML);
    }
}

window.addEventListener('load', async () => {
    await getAllProducts()
    createAllProductsNodes()
});




