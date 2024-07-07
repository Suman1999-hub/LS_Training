// const localstore = [
//   { name: "suman", email: "suman@gmail.com", password: "Q1w2e3r4t5y6@" },
// ];
// localStorage.setItem("users", JSON.stringify(localstore));
var isLogin = false;
var ismail = false;
var ispassword = false;
var isName = false;

function BtnClick() {
  var name1 = document.getElementById("name").value;
  var email1 = document.getElementById("email").value;
  var password1 = document.getElementById("password").value;

  if (email1 !== "") {
    vaildEmail(email1);
  } else {
    document.getElementById("formMail").innerText = "Enter the Email";
  }

  if (password1 !== "") {
    validPassword(password1);
  } else {
    document.getElementById("formPass").innerText = "Enter the Password";
  }

  if (name1 !== "") {
    validName(name1);
  } else {
    document.getElementById("formName").innerText = "Enter the Name";
  }

  console.log(name1);
  console.log(password1);
  console.log(email1);
  const local = JSON.parse(localStorage.getItem("users"));

  console.log(local);

  for (const i in local) {
    console.log(local[i].name);
    if (
      local[i].name === name1 &&
      local[i].email === email1 &&
      local[i].password === password1
    ) {
      isLogin = true;
      console.log("Vaild");
    } else {
      console.log("Invalid");
    }
  }
  if (isName === true && ismail === true && ispassword === true) {
    if (isLogin) {
      document.getElementById(
        "cont"
      ).innerHTML += `<div class="alert alert-success alert-dismissible fade show" role="alert">
      Successfully Login <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
      window.location.href += "main.html";
    } else {
      document.getElementById(
        "cont"
      ).innerHTML += `<div class="alert alert-danger alert-dismissible fade show" role="alert">
      Invalid Data <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
    }
  }
}

function vaildEmail(mail) {
  //   var mail = document.getElementById("email").value;
  var disMail = document.getElementById("formMail");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(mail)) {
    disMail.textContent = "";
    ismail = true;
  } else {
    disMail.textContent = "Invalid Email";
  }
}
function validPassword(pass) {
  const passwordVal = document.getElementById("formPass");
  const passRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
  if (passRegex.test(pass)) {
    passwordVal.textContent = "";
    ispassword = true;
  } else {
    passwordVal.textContent = "Invalid Password";
  }
}
function validName(name) {
  const nameVal = document.getElementById("formName");
  var namePattern = /^[a-zA-Z\s-]+$/;

  if (namePattern.test(name)) {
    nameVal.textContent = "";
    isName = true;
  } else {
    nameVal.textContent = "Invalid Name";
  }
}
