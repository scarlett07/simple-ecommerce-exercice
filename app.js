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
    <button data-product-id=${product.id} onclick="addToCart(${
    product.id
  })" class='btn btn-primary'>Agregar a carrito</button>
    <hr/>
  `;
  let productContainer = document.createElement("div");
  productContainer.className = "col text-center";
  productContainer.innerHTML = template;
  return productContainer;
}

drawProducts(data);

function addToCart(shoppedItem) {
  let itemsIds = JSON.parse(localStorage.getItem("cartitemIds") || "[]");
  itemsIds.push(shoppedItem);
  localStorage.setItem("cartItemsIds", JSON.stringify(itemsIds));
  console.log(localStorage.getItem("cartItemsIds"));
  increaseCounter();
  toggleButtons();
  let thisButton = event.target;
  thisButton.innerText = "Quitar a carrito";
  thisButton.classList.remove("btn-primary");
  thisButton.classList.add("btn-danger");
}

function increaseCounter() {
  let counterHTML = document.getElementById("counterItems");
  let counterNumber = parseInt(counterHTML.innerText);
  counterNumber++;
  counterHTML.innerText = counterNumber;
}

function toggleButtons() {}
