let modalOpen = document.getElementById("cartOpen");
let cartDiv = document.getElementById("cart");
let body = document.querySelector("body");
let close_modal = document.getElementById("close_modal");
let h2 = document.createElement("h2");
let disable_body = document.getElementById("disable_body");

modalOpen.addEventListener("click", (event) => {
  event.preventDefault();
  body.className = "body_modal";
  cartDiv.className = "cartGo";
  h2.textContent = "CART";
  cartDiv.style.width = "40%";
  disable_body.style.display = "block";
});
cartDiv.append(h2);

const closeModal = (event) => {
  console.log(event);
  cartDiv.className = "cart_popup";
  disable_body.style.display = "none";
  body.classList.remove("body_modal");
};
close_modal.addEventListener("click", closeModal);

disable_body.addEventListener("click", closeModal);
