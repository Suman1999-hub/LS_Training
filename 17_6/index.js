// const arr=["apple","mango","orange","banana"];
// const res=arr.toString();
// console.log(res);
// console.log(typeof(res));

// console.log(arr.pop());
// console.log(arr);


// const m=arr.shift();
// console.log(m);
// console.log(arr);

// const n=arr.unshift("apple");
// console.log(n);
// console.log(arr);


const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 20 },
    { name: 'David', age: 35 },
    { name: 'Eve', age: 28 }
  ];

  
  people.sort((a,b)=>a.age-b.age);
  console.log(people);



const nestedArray = [1, [2, [3, [4]], 5], 6];
console.log(nestedArray.flat(3));


const a=new Array(5);
console.log(a.fill(10));

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.toString());

let number = [1, 2, 3, 4, 5];
console.log(number.shift());








let str = 'hello';
let arr=[];
for(let i=0;i<str.length;i++){
    arr[i]=str.charAt(i);

}
console.log(arr);


//let x=[1,2,3,2,1];
// let xor=0; 

// for(let i=0;i<x.length;i++){
//     xor^=x[i];
//     console.log(xor);
// }
// console.log(xor);


let x=[1,2,3,2,1];
let count={};
x.forEach(ele => {
    if(count[ele]===undefined){
        count[ele]=1;
    }
    else{
        count[ele]++;
    }
});
for(let keys in count){
    console.log(keys+"->"+count[keys]);
}

//let y=[1,2,3,2,1];
// if(x===y){
//     console.log("True");
// }
// else {
//     console.log("False");
// }

let y=[1,2,3,2,1];
// const ans=y.reduce((acc,curr)=>{
//     if(y[acc],)
// },0)

//Highest value

let max=0;
for(let i=0;i<y.length;i++){
    if(y[i]>max){
        max=y[i];
    }
}
console.log(max);
console.log(Math.max(...y));

//let min=0;
//lowest value
let min=Number.MAX_VALUE;


for(let j=0;j<y.length;j++){
    if(y[j]<min){
        min=y[j];
    }
    
}
console.log(min);

console.log(Math.min(...y));

const xy=["ab","bb"];
console.log(xy.sort());
//console.log(xy.sort((a,b)=>a-b));

console.log(Math.random());
console.log(null>0);