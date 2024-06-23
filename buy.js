const { createClient } = supabase;
const supabaseUrl = "https://sllcsbprxdfptgviyhkf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsbGNzYnByeGRmcHRndml5aGtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg5Nzg1MjYsImV4cCI6MjAzNDU1NDUyNn0.hx1uhsAG67Ja8cTfXLzGK43qgNoMEV6hDZNWzktDI70";
const _supabase = createClient(supabaseUrl, supabaseKey);
//Render view
async function renderView() {
  // Query form server
  const { data, error } = await _supabase
    .from("products")
    .select()
    .eq("type", localStorage.getItem("selectedType"));
  let domValue = "";

  //Render view
  data.forEach((prod, i) => {
    domValue += `<div class="ipad__item">
  <a href="./detail_buy.html" onclick="selectedItem(${
    prod.id
  })" class="ipad__item__img">
    <img src="${prod.img}" alt="">
  </a>
  <div class="ipad__item__type">
      ${prod.color.reduce((value, item) => {
        return (
          value +
          `  <div class="dot" style="background-color:${item.hex};"></div>`
        );
      }, "")}
  </div>
  <span class="ipad__item__new">Mới</span>
  <h1 class="ipad__item__name">${prod.name}</h1>
  <span class="ipad__item__price">Từ ${
    prod.price[0]
  }đ hoặc 1.181.000đ/th. trong 24 tháng*</span>
  <div class="ipad__item__box">
    <a href="./detail_buy.html" class="ipad__item__buy" onclick="selectedItem(${
      prod.id
    })" id="${prod.id}">Mua</a>
  </div>
  </div>`;
  });

  document.querySelector(".section__discovery__ipads").innerHTML = domValue;
}
function selectedItem(id) {
  console.log("click");
  localStorage.setItem("selectedItem", id);
}
renderView();

async function test() {
  const { error } = await _supabase.from("products").insert();
}
// data = [
//   {
//     name: "iPad Pro",
//     size: [11, 13],
//     price: ["26.000.000", "28.999.000"],
//     img: "./img/home_ipad_pro.png",
//     color: [
//       { name: "Đen Không Gian", hex: "#494749" },
//       { name: "Bạc", hex: "#e5e6e7" },
//     ],
//     type: "ipad",
//   },
//   {
//     name: "iPad Air",
//     size: [11, 13],
//     price: ["13.000.000", "16.999.000"],
//     img: "./img/home_ipad_air.png",
//     color: [
//       { name: "Xám Không Gian", hex: "#79777b" },
//       { name: "Xanh Dương", hex: "#dae7e8" },
//       { name: "Tím", hex: "#e3dee9" },
//       { name: "Ánh Sao", hex: "#e6e1da" },
//     ],
//     type: "ipad",
//   },
//   {
//     name: "iPad",
//     size: [10.9],
//     price: ["9.999.000"],
//     img: "./img/home_ipad.png",
//     color: [
//       { name: "Xanh Dương", hex: "#6880a3" },
//       { name: "Vàng", hex: "#f0d966" },
//       { name: "Hồng", hex: "#de6c7b" },
//       { name: "Bạc", hex: "#e3e4e5" },
//     ],
//     type: "ipad",
//   },
//   {
//     name: "iPad Mini",
//     size: [8.3],
//     price: ["13.999.000"],
//     img: "./img/home_ipad_mini.png",
//     color: [
//       { name: "Xám không gian", hex: "#767479" },
//       { name: "Hồng", hex: "#e8d1cf" },
//       { name: "Tím", hex: "#bdbcd4" },
//       { name: "Ánh Sao", hex: "#e5dfd5" },
//     ],
//     type: "ipad",
//   },
// ];

// test();
