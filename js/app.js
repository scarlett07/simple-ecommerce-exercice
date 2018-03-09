function drawProducts(data) {
  let products = data.products;
  let productsContainer = document.getElementById("products-container");
  products.forEach((product, index) => {
    let productHTML = createProductHTML(product);
    productsContainer.appendChild(productHTML);
  });
}

function createProductHTML(product) {
  let template = `
    <h3>${product.title}</h3>
    <img src='${product.imageUrl}' alt='${product.description}'/>
    <p>${product.description}</p>
    <button data-product-id=${product.id}
      onclick="addToCart(${product.id}, data)"
      class='btn btn-primary'>
        Agregar a carrito
      </button>
    <hr/>
  `;
  let productContainer = document.createElement("div");
  productContainer.className = "col text-center";
  productContainer.innerHTML = template;
  return productContainer;
}

drawProducts(data);


function addToCart(id, data) {
  const button = event.target;
  changeButtonStatus(button);


  /* cuando agrego a carrito, tengo que:
  2) Guardar mi producto en algun lugar
  3) Cambiar el boton de agregar a carrito
  por quitar del carrito
  */
}



function removeFromCart() {
  /* cuando agrego a carrito, tengo que:
  1) Decrementar en uno mi contador del menu
  2) Borrar mi producto de algun lugar
  3) Cambiar el boton de quitar del carrito
  por agregar a carrito
  */
}

function increaseCounter(counterItemsHTML) {
  let counter =parseInt(counterItemsHTML.innerText)
  let counterItems = counter +1 ;
  counterItemsHTML.innerText=counterItems //actualizo el valor del carrito
}

function decreaseCounter(counterItemsHTML) {
    let counter =parseInt(counterItemsHTML.innerText)
    let counterItems = counter -1 ;
    counterItemsHTML.innerText=counterItems //actualizo el valor del carrito
  /* como accedemos al HTML del contador
  y como lo incrementamos*/
}

function changeButtonStatus(button) {
  let counterItemsHTML= document.getElementById('counterItems');
  // let button =  buttonChange.innerText;
 if (button.innerText == 'Agregar a carrito'){
   button.innerText = 'Quitar al carrito';
   increaseCounter(counterItemsHTML);
 }else{
   button.innerText = 'Agregar a carrito'
   decreaseCounter(counterItemsHTML);

 }
  /* esta funcion deberia recibir un boton y
  cambiar su estatus
    Si el boton esta en agregar al carrito
      cambia el texto a quitar del carrito
    Y viceversa
  */
}
