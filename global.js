var btn_gototop = document.querySelector(".gototop");

window.addEventListener("scroll", function (event) {
  if (window.scrollY > 150) {
    btn_gototop.classList.add("show");
  } else {
    btn_gototop.classList.remove("show");
  }
});
btn_gototop.addEventListener("click", (e) => {
  // console.log("Hello world");s
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// const user = {
//   name: "nguyen khac quang",
// };

// localStorage.setItem("user", JSON.stringify(user));
let user = JSON.parse(localStorage.getItem("user"));
const authenDOM = document.querySelector("header .authentication");
if (user == null) {
  authenDOM.innerHTML = `          <a href="./register.html" class="navigation__tag">Đăng ký</a>
          <a href="./login.html" class="navigation__tag">Đăng nhập</a>`;
} else {
  authenDOM.innerHTML = `      <a href="#" class="navigation__tag">${user.name}</a>
          <a href="./login.html" class="navigation__tag" onclick="logout()">Đăng xuất</a>`;
}
//Click logout
function logout() {
  // e.preventDefault();
  // console.log("CLICK");
  localStorage.setItem("user", null);
  location.reload();
}

function selectedType(type) {
  localStorage.setItem("selectedType", type);
  user = JSON.parse(localStorage.getItem("user"));
  if (user == null) {
    window.location.href = "./login.html";
  } else {
    window.location.href = "./buy.html";
  }
}
