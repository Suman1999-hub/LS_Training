// const localstore = [
//   { name: "suman", email: "suman@gmail.com", password: "Q1w2e3r4t5y6@" },
// ];
// localStorage.setItem("users", JSON.stringify(localstore));
var isLogin = false;
var ismail = false;
var ispassword = false;
var isName = false;
const localstore = [];
function BtnClick() {
  var name1 = document.getElementById("name").value;
  var email1 = document.getElementById("email").value;
  var password1 = document.getElementById("password").value;
  let newUser = { name: name1, email: email1, password: password1 };
  localStorage.setItem("users", JSON.stringify(localstore.push(newUser)));
}
