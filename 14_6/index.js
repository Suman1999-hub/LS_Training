// var arr=["Banana", "Apple", "Pear", "Grapes"];
// console.log(arr.sort());

// console.log(arr.reverse());

// var a=[10,32,1,43,54,65,4,5,7,9,10];
// console.log(a.sort((a,b)=>b-a));

// var res=a.sort(function(a,b){return(b-a)});
// console.log(res);

 var str="i am kiran skpur kiran and xyz no one can handle dog without cat i am kiran skpur kiran and xyz no one can handle dog without cat";
var resArr=["skpur","zzy","xyz"];
var repArr1=[
    {name:"kiran",newName:"debnath"},
    {name:"dog",newName:"cat"} 
]
//var res=str.split(" ");
//console.log(res);
// for(let i=0;i<resArr.length;i++){
//     for(let j=0;j<res.length;j++){
//         if(resArr[i]===res[j]){
//             res.splice(j, 1);
//         }
//     }
// }
// //console.log(res);
//     //console.log(repArr1[0].name +" "+repArr1[0].newName);
//         for (let j = 0; j < res.length; j++) {
//             for (let i = 0; i < repArr1.length; i++) {
//                 if (res[j] === repArr1[i].name) {
//                     res[j] = repArr1[i].newName; 
                    
//                 }
//             }
//         }
//     console.log(res.join(" "));

// for(let i=0;i<resArr.length;i++){
//    str= str.replaceAll(resArr[i],"");
// }
// for(let i=0;i<repArr1.length;i++){
//     str= str.replaceAll(repArr1[i].name,repArr1[i].newName);
//  }
// console.log(str);


// let person={firstName:"Suman",lastName:"Rana",age:25};
// console.log(person['firstName']);

// let arr=[];
// let len=10;
//arr.length=len;

// console.log(arr.length);

// arr.fill(0,0,arr.length);
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// console.log(arr);

// let arr1=new Array(5).fill(0);
// console.log(arr1);
// var sub=(0.2*10+0.1*10)/10;
// console.log(sub);

// let num=parseInt("12.45");
// console.log(typeof(num));
// arr1.unshift(4);

let arr=[1,2,3]
arr.splice(1,2);
console.log(arr);

console.log(Array.isArray(arr));
const fruits=["Banana", "Orange", "Apple", "Mango"];
let text =fruits.join(" and ");
console.log(text);


fruits.unshift("Lemon","Pineapple");
console.log(fruits);
//const myFruits=fruits.with(2,"Gueva");
//console.log(myFruits);

let bool = false;
let text1 = bool.constructor;
console.log(text1);


