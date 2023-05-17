const products = document.querySelectorAll(".product");

products.forEach(product => {
  const addToCartBtn = product.querySelector(".add-to-cart");
  const removeFromCartBtn = product.querySelector(".remove-from-cart");
  const count = product.querySelector(".product-count");
  const price = product.querySelector(".product-price")

  let cartCount = parseInt(count.dataset.count);
  let productPrice = parseInt(price.dataset.count);

  // set the logic for increasing the item on cart
  addToCartBtn.addEventListener("click", () => {
    cartCount++;
    count.dataset.count = cartCount;
    price.dataset.price = productPrice;
    count.innerText = `On cart: ${cartCount} Total price: ${cartCount*productPrice}`;
  });

  // set the logic for decreasing the item on cart
  removeFromCartBtn.addEventListener("click", () => {
    if (cartCount > 0) {
      cartCount--;
      count.dataset.count = cartCount;
      count.innerText = `On cart: ${cartCount} Total price: ${cartCount*productPrice}`;
    }
  });
});
