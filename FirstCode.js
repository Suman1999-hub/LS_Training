//console.log("Suman Rana");
var car={  
    model:"123xr",
    companyName:"Hero",
    safty:"5 Star" 
}
console.log(car);
var key="model";
console.log(car[key]);


let carObj={
    brand:"Toyota",
    model:"Corolla"
}
console.log(Object.keys(carObj));
console.log(Object.values(carObj)[0]);


let target={a:1};
let source={b:2,c:3};
Object.assign(target,source);
console.log(target);
console.log(source);

var person={
    name:"Arindam",
    age:"24",
}
let {name,age}=person;
console.log(name);
console.log(age);

let emp={
    name:"Suman",
    position:"Developer",
    details:{
        age:25,
        experience:"2 Years"
,    }
}
console.log(emp.details.age);

const empl=[
    {name:'Suman',position:'Developer'},
    {name:'Arindam',position:'Designer'},
]
console.log(empl[0].position);
console.log(empl[1].position);


let company={
    name:'Logic Square',
    employees:["Souvik","Ritik","Suman"]
}
let company1={
    name:'Logic Square',
    employees:["Souvik","Ritik","Suman"]
}
console.log(company.employees[0]);
if(company===company1){
    console.log(true);
}
else {
    console.log(false);
}
const str="Learn Javascript";
console.log(str.length);

console.log(str[0]);
console.log(str.charAt(2));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.slice(0,5));
console.log(str.trim());
console.log(str.includes("Learn"));
console.log(str.split(" "));
console.log(str.replace("Javascript","React JS"));


var x="Suman";
var y=new String("Suman");
console.log(typeof(x));
console.log(typeof(y));

if(x===y){

    console.log("true");
}
else{
    console.log("false");
}

var s="";
if(s.length<1){
    console.log("-1");
}

var st="Namaste Javascript !!!!";
console.log(st.slice(-7,-2));









