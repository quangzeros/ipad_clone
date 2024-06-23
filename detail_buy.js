const { createClient } = supabase;
const supabaseUrl = "https://sllcsbprxdfptgviyhkf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsbGNzYnByeGRmcHRndml5aGtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg5Nzg1MjYsImV4cCI6MjAzNDU1NDUyNn0.hx1uhsAG67Ja8cTfXLzGK43qgNoMEV6hDZNWzktDI70";
const _supabase = createClient(supabaseUrl, supabaseKey);

var valueDom = "";
var dataProd;
async function renderView() {
  let { data, error } = await _supabase
    .from("products")
    .select()
    .eq("id", localStorage.getItem("selectedItem"));
  dataProd = data[0];
  document.querySelector(".top_info h1").innerHTML = data[0].name;

  document.querySelector(
    ".section__detail"
  ).innerHTML = `        <div class="heading">
                <div class="left">
                  <span>Mới</span>
                  <h1>Mua ${data[0].name}</h1>
                </div>
                <div class="right"> 
                  <div class="icon">
                    <svg enable-background="new 0 0 25 25" viewBox="0 0 25 25"><path d="m0 0h25v25h-25z" fill="none"></path><path d="m18.5 5.0005h-1.7755c-.1332-2.2255-1.967-4.0005-4.2245-4.0005s-4.0913 1.775-4.2245 4.0005h-1.7755c-1.3789 0-2.5 1.1216-2.5 2.5v11c0 1.3784 1.1211 2.4995 2.5 2.4995h12c1.3789 0 2.5-1.1211 2.5-2.4995v-11c0-1.3784-1.1211-2.5-2.5-2.5zm-6-3.0005c1.7058 0 3.0935 1.3264 3.2245 3.0005h-6.449c.131-1.6741 1.5187-3.0005 3.2245-3.0005zm7.5 16.5005c0 .8271-.6729 1.5-1.5 1.5h-12c-.8271 0-1.5-.6729-1.5-1.5v-11c0-.8271.6729-1.5005 1.5-1.5005h12c.8271 0 1.5.6734 1.5 1.5005zm-4.8633-7.5066c-.0377.0378-.7383.4304-.7383 1.3289 0 1.0344.8965 1.3968.9266 1.4044 0 .0227-.1356.5059-.4746.9891-.2938.4228-.6177.8532-1.0848.8532-.4746 0-.5876-.2794-1.1375-.2794-.5273 0-.7157.2869-1.1451.2869-.4369 0-.7383-.3926-1.0848-.8834-.3917-.5663-.7232-1.4572-.7232-2.3028 0-1.3515.8814-2.0688 1.7402-2.0688.4671 0 .8437.302 1.13.302.2787 0 .7006-.3171 1.2204-.3171.2034-.0001.9115.015 1.3711.687zm-2.5538-.7626c-.0377 0-.0678-.0076-.0979-.0076 0-.0227-.0075-.0755-.0075-.1284 0-.3624.1883-.7097.3842-.9438.2486-.2945.6629-.521 1.017-.5285.0075.0378.0075.0831.0075.1359 0 .3624-.1507.7097-.3616.974-.2336.287-.6253.4984-.9417.4984z" fill="#1d1d1f"></path></svg>
                  </div>
      
                  <span>Còn hàng</span>
                </div>
              </div>
      
              <div class="content">
                <img src="${data[0].img}" alt="" class="right">
                <div class="left">
                  <div class="size">
                    <h1>Phiên bản. <span>Chọn kích cỡ.</span></h1>
                    ${data[0].size.reduce((value, item) => {
                      return (
                        value +
                        ` <div class="size_detail">
                        <h1>Phiên bản ${item}</h1>
                      </div>`
                      );
                    }, "")}
                  </div>
      
                  <span class="sub__desc">Trả góp theo tháng với phí dịch vụ thực 1.67%, sau khi thanh toán lần đầu 20%. Có thêm tùy chọn thanh toán khi hoàn tất giao dịch.</span>
      
                  <div class="color">
                    <h1>Màu. <span>Chọn màu yêu thích của bạn.</span></h1>
                    <div class="color_flex">
                    ${data[0].color.reduce((value, item) => {
                      return (
                        value +
                        ` <div class="color_detail">
                        <div class="dot" style="background-color: ${item.hex};"></div>
                        <p>${item.name}</p>
                      </div>`
                      );
                    }, "")}
                    </div>
                  </div>
      
                  <div class="price">
                      <h1>Giá của sản phẩm : <span>${
                        data[0].price[0]
                      }đ</span></h1>
                  </div>
      
      
                  <button class="btn btn__addToCart disallowed" onclick='addToCart()'>Thêm vào giỏ hàng</button>
      
      
                  <div class="suggest">
                    <span>Vẫn chưa thể quyết định?</span>
                    <p>Bạn có thể xem thêm các sản phẩm khác </p>
                    <a href="./buy.html">Xem tiếp các sản phẩm khác tại đây</a>
                  </div>
                </div>
              </div>
      `;

  var isSizeSelected = 0;
  var isColorSelected = 0;
  //Click select Size
  document
    .querySelector(".section__detail .content .size")
    .addEventListener("click", (e) => {
      if (e.target.closest(".size_detail")) {
        e.target
          .closest(".size")
          .querySelectorAll(".size_detail")
          .forEach((item, i) => {
            item.classList.remove("selected");
          });
        e.target.closest(".size_detail").classList.add("selected");
        isSizeSelected = 1;
        if (isSizeSelected && isColorSelected) {
          document
            .querySelector(".section__detail .content .btn__addToCart")
            .classList.remove("disallowed");

          //
          const selectedSize = document
            .querySelector(".section__detail .size_detail.selected h1")
            .textContent.split(" ")[2];
          document.querySelector(
            ".section__detail .content .price span"
          ).textContent =
            data[0].price[
              data[0].size.findIndex((el) => {
                return el == selectedSize;
              })
            ] + "đ";

          //
        }
      }
    });
  // Click select color
  document
    .querySelector(".section__detail .content .color")
    .addEventListener("click", (e) => {
      if (e.target.closest(".color_detail")) {
        e.target
          .closest(".color")
          .querySelectorAll(".color_detail")
          .forEach((item, i) => {
            item.classList.remove("selected");
          });
        e.target.closest(".color_detail").classList.add("selected");
        isColorSelected = 1;
        if (isSizeSelected && isColorSelected) {
          document
            .querySelector(".section__detail .content .btn__addToCart")
            .classList.remove("disallowed");

          //
          const selectedSize = document
            .querySelector(".section__detail .size_detail.selected h1")
            .textContent.split(" ")[2];
          document.querySelector(
            ".section__detail .content .price span"
          ).textContent =
            data[0].price[
              data[0].size.findIndex((el) => {
                return el == selectedSize;
              })
            ] + "đ";
          //
        }
      }
    });
}

renderView();

//Click btn-addToCart
async function addToCart() {
  const sizeSel = document.querySelector(
    ".section__detail .size_detail.selected"
  );
  const colorSel = document.querySelector(
    ".section__detail .color_detail.selected"
  );

  if (!sizeSel) {
    return;
  }
  if (!colorSel) {
    return;
  }
  let id = "id" + Math.random().toString(16).slice(2);
  const cartItem = {
    proId: id,
    size: sizeSel.querySelector("h1").textContent,
    color: colorSel.querySelector("p").textContent,
    name: dataProd.name,
    img: dataProd.img,
    price: document
      .querySelector(".section__detail .content .price span")
      .textContent.replace("đ", ""),
    quantity: 1,
  };

  const user = JSON.parse(localStorage.getItem("user"));
  if (user.cart == null) {
    user.cart = [cartItem];
  } else {
    user.cart.push(cartItem);
  }
  localStorage.setItem("user", JSON.stringify(user));
  //Update tren server
  const { data, error } = await _supabase
    .from("users")
    .update({ cart: user.cart })
    .eq("id", user.id);

  window.location.href = "./cart.html";
}

var top_info = document.querySelector(".top_info");

window.addEventListener("scroll", function (event) {
  if (window.scrollY > 120) {
    top_info.classList.add("animate-downtop");
  } else {
    top_info.classList.remove("animate-downtop");
  }
});
