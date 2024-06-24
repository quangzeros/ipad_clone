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
  const data = [
    {
      name: "MacBook Air",
      size: [13, 15],
      price: ["24.999.000", "29.999.000"],
      img: "./img/home_mac_air.png",
      color: [
        { name: "Đêm Xanh Thẳm", hex: "#2e3641" },
        { name: "Ánh Sao", hex: "#f0e5d2" },
        { name: "Xám Không Gian", hex: "#7c7e80" },
        { name: "Bạc", hex: "#e2e4e6" },
      ],
      type: "mac",
    },
    {
      name: "MacBook Pro",
      size: [14, 16],
      price: ["19.999.000", "22.999.000"],
      img: "./img/home_mac_pro.png",
      color: [
        { name: "Xám Không Gian", hex: "#7d7e80" },
        { name: "Bạc", hex: "#e2e4e6" },
      ],
      type: "mac",
    },
    {
      name: "iMac",
      size: [24],
      price: ["36.999.000"],
      img: "./img/home_imac.png",
      color: [
        { name: "Xanh Dương", hex: "#a8bed3" },
        { name: "Xanh Lá", hex: "#a3beb5" },
        { name: "Hồng", hex: "#edb9ae" },
        { name: "Bạc", hex: "#d9dadc" },
        { name: "Vàng", hex: "#e9ca94" },
        { name: "Cam", hex: "#e8aa94" },
        { name: "Tím", hex: "#abacca" },
      ],
      type: "mac",
    },
  ];
  const { error } = await _supabase.from("products").insert(data);
}

// test();
