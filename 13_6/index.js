// var x=1;
// a();
// b();
// function a(){
//     var x=10;
//     console.log(x);
// }
// function b(){
//     var x=100;
//     console.log(x);
// }


//var str="Namaste Javascript";
//document.getElementById('demo').innerHTML=str.charCodeAt(1);

//function myFunc(){
    //var str=document.getElementById('demo').innerHTML;
    //var txt=str.replace("Javascript","INDIA");
    //var txt=str.replace(/Javascript/g,"India");
    // var txt=str.replace(/Javascript/i,"India");
    //document.getElementById('demo').innerHTML=txt;

    // var x=0.2+0.1;
    // console.log(x);

//     var x=(0.2*10+0.1*10)/10;
//     console.log(x);
// }

let d5="logic square";
var x=d5.split(" ");
//Logic Square
var res="";
for(let i=0;i<x.length;i++){
    res+=x[i].charAt(0).toUpperCase()+ x[i].slice(1)+" ";
}
console.log(res);

var res=x.map((st)=>
    st.charAt(0).toUpperCase()+ st.slice(1)
).join(" ");
console.log(res);


//LOGIC Square
var res=x[0].toUpperCase() +" "+ x[1].charAt(0).toUpperCase()+x[1].slice(1);
console.log(res);

//lOGIC sQUARE
var res="";
for(let i=0;i<x.length;i++){
    res+=x[i].charAt(0)+ x[i].slice(1).toUpperCase()+" ";
}
console.log(res);

var res=x.map((st)=>
    st.charAt(0)+ st.slice(1).toUpperCase()
).join(" ");
console.log(res);
