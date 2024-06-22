//Handle click REGISTER event
document.querySelector(".register-btn").addEventListener("click", (e) => {
  e.preventDefault();
  // check is INPUT valid ?
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const name = document.querySelector("#name").value;
  const confirmPassword = document.querySelector("#confirmPassword").value;

  if (name == null || name == "") {
    document.querySelector("#name").classList.add("invalid");
    document
      .querySelector("#name")
      .closest(".form-group")
      .querySelector(".message").innerHTML = "Vui lòng nhập tên!";
    return;
  }
  if (email == null || !ValidateEmail(email)) {
    document.querySelector("#email").classList.add("invalid");
    document
      .querySelector("#email")
      .closest(".form-group")
      .querySelector(".message").innerHTML = "Email không hợp lệ!";
    return;
  }
  if (password == null || password == "") {
    document.querySelector("#password").classList.add("invalid");
    document
      .querySelector("#password")
      .closest(".form-group")
      .querySelector(".message").innerHTML = "Vui lòng nhập Password!";
    return;
  }

  if (
    confirmPassword == null ||
    confirmPassword == "" ||
    confirmPassword != password
  ) {
    document.querySelector("#confirmPassword").classList.add("invalid");
    document
      .querySelector("#confirmPassword")
      .closest(".form-group")
      .querySelector(".message").innerHTML = "Password không chính xác!";
    return;
  }

  //Gui request len server

  //check Email is exists
  // if (user == null) {
  //   document.querySelector(".section__form.login .message-detail").innerHTML =
  //     "Email hoặc password không chính xác!";
  //   return;
  // }

  const user = {
    name: name,
    email: email,
  };

  localStorage.setItem("user", JSON.stringify(user));

  window.location.href = "./login.html";
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

document.querySelector("#confirmPassword").addEventListener("focus", (e) => {
  document.querySelector("#confirmPassword").classList.remove("invalid");
  document
    .querySelector("#confirmPassword")
    .closest(".form-group")
    .querySelector(".message").innerHTML = "";
});

document.querySelector("#name").addEventListener("focus", (e) => {
  document.querySelector("#name").classList.remove("invalid");
  document
    .querySelector("#name")
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
