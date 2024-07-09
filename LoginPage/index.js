// const localstore = [
//   {
//     name: "suman",
//     email: "suman@gmail.com",
//     password: "Q1w2e3r4t5y6@",
//     coin: 0,
//     count: 0,
//     currDate: "",
//     prevDate: "",
//     screen: ["red"],
//     isBlueScreen: false,
//   },
// ];
// localStorage.setItem("users", JSON.stringify(localstore));
var isLogin = false;
var ismail = false;
var ispassword = false;
let selectedDate = "";

function BtnClick() {
  var email1 = document.getElementById("email").value;
  var password1 = document.getElementById("password").value;
  if (new Date(selectedDate) < new Date()) {
    return;
  }
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

  console.log(password1);
  console.log(email1);
  const local = JSON.parse(localStorage.getItem("users"));

  console.log(local);

  for (const i in local) {
    if (local[i].email === email1 && local[i].password === password1) {
      isLogin = true;
      console.log("Vaild");
    } else {
      console.log("Invalid");
    }
  }
  if (ismail === true && ispassword === true) {
    if (isLogin) {
      document.getElementById(
        "cont"
      ).innerHTML += `<div class="alert alert-success alert-dismissible fade show" role="alert">
      Successfully Login <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
      const userData = localStorage.getItem("users");
      const parseData = JSON.parse(userData);
      for (let i in parseData) {
        console.log(parseData[i]);
        if (parseData[i].email === email1) {
          //parseData[i].currDate = new Date(selectedDate);
          if (selectedDate !== parseData[i].currDate) {
            if (parseData[i].currDate) {
              if (CheckDateisYesterday(selectedDate, parseData[i].currDate)) {
                parseData[i].count = parseData[i].count + 1;
              } else {
                parseData[i].count = 1;
              }
            } else {
              parseData[i].count = 1;
            }
            parseData[i].coin = coinCount(
              parseData[i].count,
              parseData[i].coin
            );
          }

          if (parseData[i].count === 6 && parseData[i].isBlueScreen === false) {
            parseData[i].screen.push("blue");
            parseData[i].isBlueScreen = true;
          }
          if (parseData[i].count > 5 && parseData[i].isBlueScreen === true) {
            parseData[i].count = 0;
          }
          parseData[i].prevDate = parseData[i].currDate;
          parseData[i].currDate = selectedDate;
        }
      }
      localStorage.setItem("users", JSON.stringify(parseData));
      window.location.href += "sidebar.html";
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

function CheckDateisYesterday(curr, prev) {
  let date1 = new Date(curr);
  let date2 = new Date(prev);

  // Use Intl.DateTimeFormat to format dates
  let dateFormatter = new Intl.DateTimeFormat("en-US");

  // Calculate the number of days between two dates
  let Difference_In_Days = Math.floor((date1 - date2) / (1000 * 60 * 60 * 24));
  console.log(Difference_In_Days);
  return Difference_In_Days === 1;
}

function coinCount(count, coin) {
  switch (count) {
    case 1:
      coin = coin + 100;
      break;
    case 2:
      coin = coin + 200;
      break;
    case 3:
      coin = coin + 400;
      break;
    case 4:
      coin = coin + 600;
      break;
    case 5:
      coin = coin + 1000;
      break;
  }
  return coin;
}

let currentDate = document.getElementById("currDate");
currentDate.addEventListener("change", function (e) {
  let showDate = e.target.value;
  console.log(showDate);
  selectedDate = showDate;
});
