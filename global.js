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
