const URL = "https://fakestoreapi.com/products";

async function getProducts() {
  let response = await fetch(URL);
  let data = await response.json();
  console.log(data);

  for (let product of data) {
    let cardElement = document.createElement("div");
    cardElement.setAttribute("class", "col-4 p-3");
    let card = `<div class="card" >
              <img src="${product.image}" class="card-img-top" alt="..." style = "height: 250px"/>
              <div class="card-body">

                <h5 class="card-title">${product.title}</h5>
                 <h5 class="card-title">${product.category}</h5>
                <p class="card-text">${product.description}</p>
                <h6 class="text-success fw-bold">₹${product.price}</h6>
                <div class="mt-auto">
                <a href="#" class="btn btn-primary w-100">Buy Now</a>
            </div>
               
              </div>`;
    cardElement.innerHTML = card;
    let productRow = document.getElementById("product_list");
    productRow.insertAdjacentElement("beforeend", cardElement);
  }
}

getProducts();