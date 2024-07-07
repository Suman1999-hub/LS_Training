// function myFun(){
//     var data=document.getElementById('inp').value;
//     document.getElementById('demo').innerHTML=data;
//     console.log(data);
// }

var mixInp = "";
function myFun() {
  var data = document.getElementById("inp").value;
  //console.log(data[0]);
  //var str="";
  //for(let i=0;i<data.length;i++){
  data = data
    .replaceAll("0", "zero")
    .replaceAll("1", "one")
    .replaceAll("2", "two")
    .replaceAll("3", "three")
    .replaceAll("4", "four")
    .replaceAll("5", "five")
    .replaceAll("6", "six")
    .replaceAll("7", "seven")
    .replaceAll("8", "eight")
    .replaceAll("9", "nine");
  // console.log(data[i]);
  // if(data[i]==='0'){
  //     str+='Zero';
  // }
  // else if(data[i]==='1'){
  //     str+='One';
  // }
  // else if(data[i]==='2'){
  //     str+='Two';
  // }
  // else if(data[i]==='3'){
  //     str+='Three';
  // }
  // else if(data[i]==='4'){
  //     str+='Four';
  // }
  // else if(data[i]==='5'){
  //     str+='Five';
  // }
  // else if(data[i]==='6'){
  //     str+='Six';
  // }
  // else if(data[i]==='7'){
  //     str+='Seven';
  // }
  // else if(data[i]==='8'){
  //     str+='Eight';
  // }
  // else if(data[i]==='9'){
  //     str+='Nine';
  // }
  // console.log(data);
  mixInp = document.getElementById("inp1").value = data;

  // }
  console.log(mixInp);
}

function myFun1() {
  // let start=0;
  // let end=data.length;
  // while(start>=end){

  // }
  var a = mixInp.split("");
  for (let i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
  //data.join("");
  console.log(a);
  document.getElementById("inp2").value = a.join("");
}
function myFun2() {
  // var countMap={};
  // res.split("").forEach(element => {
  //     if (countMap[element] === undefined) {
  //       countMap[element] = 1;
  //     } else {
  //       countMap[element]++;
  //     }
  // });

  // for(let key in countMap){
  //     console.log(key+"->"+countMap[key]);
  //     if(key==='z'){
  //         countMap[key]--;

  //     }
  //     else if(key==='w'){
  //         countMap[key]--;

  //     }
  //     else if(key==='u'){
  //         countMap[key]--;

  //     }
  //     else if(key==='x'){
  //         countMap[key]--;

  //     }
  //     else if(key==='g'){
  //         countMap[key]--;

  //     }
  //     else{
  //         if(key==='')
  //     }
  // }
  var res = document.getElementById("inp2").value;
  let zero = 0,
    one = 0,
    two = 0,
    three = 0,
    four = 0,
    five = 0,
    six = 0,
    seven = 0,
    eight = 0,
    nine = 0;

  while (res.includes("z")) {
    zero++;
    res = res
      .replace("z", "")
      .replace("e", "")
      .replace("r", "")
      .replace("o", "");
  }
  while (res.includes("w")) {
    two++;
    res = res.replace("t", "").replace("w", "").replace("o", "");
  }
  while (res.includes("u")) {
    four++;
    res = res
      .replace("f", "")
      .replace("o", "")
      .replace("u", "")
      .replace("r", "");
  }
  while (res.includes("x")) {
    six++;
    res = res.replace("s", "").replace("i", "").replace("x", "");
  }
  while (res.includes("g")) {
    eight++;
    res = res
      .replace("e", "")
      .replace("i", "")
      .replace("g", "")
      .replace("h", "")
      .replace("t", "");
  }
  while (res.includes("s") && res.includes("v")) {
    seven++;
    res = res
      .replace("s", "")
      .replace("e", "")
      .replace("v", "")
      .replace("e", "")
      .replace("n", "");
  }
  while (
    res.includes("f") &&
    res.includes("i") &&
    res.includes("v") &&
    res.includes("e")
  ) {
    five++;
    res = res
      .replace("f", "")
      .replace("i", "")
      .replace("v", "")
      .replace("e", "");
  }
  while (
    res.includes("t") &&
    res.includes("h") &&
    res.includes("r") &&
    res.includes("e") &&
    res.split("e").length > 2
  ) {
    three++;
    res = res
      .replace("t", "")
      .replace("h", "")
      .replace("r", "")
      .replace("e", "")
      .replace("e", "");
  }
  while (res.includes("o") && res.includes("n") && res.includes("e")) {
    one++;
    res = res.replace("o", "").replace("n", "").replace("e", "");
  }
  while (
    res.includes("n") &&
    res.includes("i") &&
    res.split("n").length > 2 &&
    res.includes("e")
  ) {
    nine++;
    res = res
      .replace("n", "")
      .replace("i", "")
      .replace("n", "")
      .replace("e", "");
  }

  console.log(zero, one, two, three, four, five, six, seven, eight, nine);
}
