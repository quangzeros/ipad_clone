const { createClient } = supabase;
const supabaseUrl = "https://sllcsbprxdfptgviyhkf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsbGNzYnByeGRmcHRndml5aGtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg5Nzg1MjYsImV4cCI6MjAzNDU1NDUyNn0.hx1uhsAG67Ja8cTfXLzGK43qgNoMEV6hDZNWzktDI70";
const _supabase = createClient(supabaseUrl, supabaseKey);

//Handle click LOGIN event
document.querySelector(".login-btn").addEventListener("click", async (e) => {
  e.preventDefault();
  // check is INPUT valid ?
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  if (email == null || !ValidateEmail(email)) {
    document.querySelector("#email").classList.add("invalid");
    document
      .querySelector("#email")
      .closest(".form-group")
      .querySelector(".message").innerHTML = "Email không hợp lệ!";
    return;
  }
  if (password === null || password === "") {
    document.querySelector("#password").classList.add("invalid");
    document
      .querySelector("#password")
      .closest(".form-group")
      .querySelector(".message").innerHTML = "Vui lòng nhập Password!";
    return;
  }

  //Gui request len server
  const { data, error } = await _supabase
    .from("users")
    .select()
    .eq("email", email)
    .eq("password", password);
  if (error) {
    document.querySelector(
      ".section__form.register .message-detail"
    ).innerHTML = "Server xảy ra lỗi vui lòng thử lại sau!";
    return;
  }
  if (data.length == 0) {
    document.querySelector(".section__form.login .message-detail").innerHTML =
      "Email hoặc password không chính xác!";
    return;
  }
  localStorage.setItem("user", JSON.stringify(data[0]));

  window.location.href = "./index.html";
});

document.querySelector("#email").addEventListener("focus", (e) => {
  document.querySelector("#email").classList.remove("invalid");
  document
    .querySelector("#email")
    .closest(".form-group")
    .querySelector(".message").innerHTML = "";
});

document.querySelector("#password").addEventListener("focus", (e) => {
  document.querySelector("#password").classList.remove("invalid");
  document
    .querySelector("#password")
    .closest(".form-group")
    .querySelector(".message").innerHTML = "";
});

function ValidateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}
