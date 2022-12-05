let modalOpen = document.getElementById("cartOpen");
let cartDiv = document.getElementById("cart");
let body = document.querySelector("body");
modalOpen.addEventListener("click", (event) => {
  event.preventDefault();
  body.className = "body_modal"
  let hide = document.createElement("div");
  hide.innerHTML = "<p>jvjhvhg</p>"
  cartDiv.append(hide)
  cartDiv.className = "cartGo"
});

