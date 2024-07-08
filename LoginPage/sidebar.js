function logOut() {
  window.location.href = "/LoginPage";
}

var x = JSON.parse(localStorage.getItem("users"));
// console.log(x);
// console.log(x[0].currDate);
document.getElementById("Cdate").innerText = x[0].currDate;

document.getElementById("coinData").innerHTML = x[0].coin;
