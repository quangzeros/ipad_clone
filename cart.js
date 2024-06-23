var domValue = "";
const { createClient } = supabase;
const supabaseUrl = "https://sllcsbprxdfptgviyhkf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsbGNzYnByeGRmcHRndml5aGtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg5Nzg1MjYsImV4cCI6MjAzNDU1NDUyNn0.hx1uhsAG67Ja8cTfXLzGK43qgNoMEV6hDZNWzktDI70";
const _supabase = createClient(supabaseUrl, supabaseKey);
user = JSON.parse(localStorage.getItem("user"));

if (user.cart == null || user.cart == []) {
  document.querySelector(".cart_items").innerHTML =
    "<h1 class='no-cart'>Giỏ hàng trống</h1>";
} else {
  user.cart.forEach((el, i) => {
    domValue += `
 <div class="cart_item" id="${el.proId}">
<div class="item_info">
    <img class="left"  src="${el.img}" alt="">

    <div class="right">
        <h1>${el.name}</h1>
        <p>Size: <span>${el.size} inch</span></p>
        <p>Color: <span>${el.color}</span></p>
    </div>
</div>

<div class="item_quantity">
    <span class="minus" onclick='decrease(${JSON.stringify(el.proId)})'>-</span>
    <p class="quantity">${el.quantity}</p>
    <span class="plus" onclick='increase(${JSON.stringify(el.proId)})'>+</span>
</div>

<div class="item_price"><span>${transfer(
      JSON.stringify(el.price.split(".").join("") * el.quantity)
    )}</span>đ</div>

<div class="item_delete"  onclick='deleteItem(${JSON.stringify(
      el.proId
    )})'><i class="fa-solid fa-trash"></i></div>

</div> 
`;
  });
  //render View
  document.querySelector(".cart_items").innerHTML = domValue;
}

document
  .querySelector(".cart_labels .btn_clear")
  .addEventListener("click", async (e) => {
    user = JSON.parse(localStorage.getItem("user"));
    user.cart = [];
    document.querySelector(`.cart_items`).textContent = "";
    localStorage.setItem("user", JSON.stringify(user));
    const { data, error } = await _supabase
      .from("users")
      .update({ cart: JSON.stringify(user.cart) })
      .eq("id", user.id);
  });

async function decrease(id) {
  let app = "";
  let total = "";
  user = JSON.parse(localStorage.getItem("user"));
  user.cart.forEach((el) => {
    if (el.proId == id) {
      if (el.quantity > 1) {
        el.quantity -= 1;
        app = el.quantity;
        total = JSON.stringify(el.price.split(".").join("") * el.quantity);
      } else {
        return;
      }
    }
  });
  if (app || total) {
    document.querySelector(`.cart_item#${id} .quantity`).textContent = app;
    document.querySelector(`.cart_item#${id} .item_price span`).textContent =
      transfer(total);
  }
  localStorage.setItem("user", JSON.stringify(user));
  const { data, error } = await _supabase
    .from("users")
    .update({ cart: JSON.stringify(user.cart) })
    .eq("id", user.id);
}

async function increase(id) {
  let app = "";
  let total = "";
  user = JSON.parse(localStorage.getItem("user"));
  user.cart.forEach((el) => {
    if (el.proId == id) {
      el.quantity += 1;
      app = el.quantity;
      total = JSON.stringify(el.price.split(".").join("") * el.quantity);
    }
  });

  document.querySelector(`.cart_item#${id} .quantity`).textContent = app;
  document.querySelector(`.cart_item#${id} .item_price span`).textContent =
    transfer(total);
  localStorage.setItem("user", JSON.stringify(user));
  const { data, error } = await _supabase
    .from("users")
    .update({ cart: JSON.stringify(user.cart) })
    .eq("id", user.id);
}

async function deleteItem(id) {
  user = JSON.parse(localStorage.getItem("user"));
  let newCart = user.cart.filter((el) => {
    return el.proId != id;
  });
  user.cart = newCart;
  document.querySelector(`.cart_item#${id}`).remove();
  localStorage.setItem("user", JSON.stringify(user));
  const { data, error } = await _supabase
    .from("users")
    .update({ cart: JSON.stringify(user.cart) })
    .eq("id", user.id);
}

function transfer(str) {
  let newResul = "";
  str
    .split("")
    .reverse()
    .reduce((result, el, i) => {
      if (i % 3 == 0 && i != 0) {
        newResul = ".".concat(result);
      }
      newResul = el.concat(newResul);

      return newResul;
    }, "");

  return newResul;
}

function back() {
  window.location.href = "./index.html";
}
