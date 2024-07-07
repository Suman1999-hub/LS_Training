// var day;
// switch(new Date().getDay()){
//     case 0:
//         day="Sunday";
//         break;
//     case 1:
//         day="Monday";
//         break;
//     case 2:
//         day="Tuesday";
//         break;
//     case 3:
//         day="Wednesday";
//         break;
//     case 4:
//         day="Thursday";
//         break;
//     case 5:
//         day="Friday";
//         break;
//     case 6:
//         day="Saturday";
//         break;
//     default:
//         day="NOT";
// }
// console.log("Today is "+day);

// var age= 25;
// (age>18)?console.log("voter"):console.log("Not");



// function validate(){
    
//     var x=document.forms["myForm"]["fName"].value;
//     console.log(x);
//     if(x===""){
//         alert("Name must be filled out");
//         return false;
//     }
// }


    
    // setInterval(() => {
    //     const img=document.getElementById("demo");
    //     if(img.style.display==="none"){
    //         img.style.display="block";
    //     }else{
    //         img.style.display="none";
    //     }
    // }, 3000); 

    
    
    
let turn = 'X';
const ans=[];

 let curr;

document.addEventListener('DOMContentLoaded', () => {
    
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        
        button.addEventListener('click', (e) => {
            
            if (button.innerText === '' && !checkWin()) {
                curr=turn;
                button.innerText = turn;
                turn = turn === 'X' ? 'O' : 'X';
                
                if(turn==='X'){
                    ans[e.target.value]='O';
                }
                else if(turn==='O'){
                    ans[e.target.value]='X';
                }
            } 
            // if(checkWin()==false){
            //     document.getElementById("win").innerHTML=" Draw ";
            // }
            console.log("check length", ans[3])
            if(checkWin() !=false){
                document.getElementById("win").innerHTML=curr+" Win ";
            } else if (ans.length === 9 && !ans.includes(undefined)) {
                document.getElementById("win").innerHTML=" Draw ";
            }
            

        });
    });
    
});

function checkWin(){
    if(ans[0]==='X'&&ans[1]==='X'&&ans[2]==='X' ||
        ans[3]==='X'&&ans[4]==='X'&&ans[5]==='X'||
        ans[6]==='X'&&ans[7]==='X'&&ans[8]==='X'||
        ans[0]==='X'&&ans[3]==='X'&&ans[6]==='X'||
        ans[1]==='X'&&ans[4]==='X'&&ans[7]==='X'||
        ans[2]==='X'&&ans[5]==='X'&&ans[8]==='X'||
        ans[0]==='X'&&ans[4]==='X'&&ans[8]==='X'||
        ans[2]==='X'&&ans[4]==='X'&&ans[6]==='X'
    ){
        return true;
    }
    else if(ans[0]==='O'&&ans[1]==='O'&&ans[2]==='O' ||
        ans[3]==='O'&&ans[4]==='O'&&ans[5]==='O'||
        ans[6]==='O'&&ans[7]==='O'&&ans[8]==='O'||
        ans[0]==='O'&&ans[3]==='O'&&ans[6]==='O'||
        ans[1]==='O'&&ans[4]==='O'&&ans[7]==='O'||
        ans[2]==='O'&&ans[5]==='O'&&ans[8]==='O'||
        ans[0]==='O'&&ans[4]==='O'&&ans[8]==='O'||
        ans[2]==='O'&&ans[4]==='O'&&ans[6]==='O'
    ){
        return true;
    }
    else{
        return false;
    }
    
    


}
console.log(ans);
//console.log(o);
