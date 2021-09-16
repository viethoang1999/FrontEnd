let click= document.querySelector('#click');
let box1= document.querySelector('#box1');
let count=0;
click.onclick = () =>{
    if(count ==0){
        box1.style.display='none';
        count++;
    }else{
        box1.style.display='block';
        count--;
    }
}
// let btn1 = document.querySelector('.btn1');
// let box1 = document.querySelector('.box1');
// let count = 0;
// btn1.onclick = () => {
//     if( count == 0 ) {
//         box1.style.display = 'none';
//         count++;
//     }
//     else {
//         box1.style.display = 'block';
//         count--;
//     }
// }
let click1=document.querySelector('#click1');
let box2=document.querySelector('#box2');
let str="0123456789abcdefgh"
click1.onclick=() =>{
let color="#";
for(let i=0;i<6;i++){
    color+=str[Math.floor(Math.random()*18)];
}
box2.style.backgroundColor=color;

}

let click2=document.querySelector("#click2");
let box3=document.querySelector("#box3");
let box4=document.querySelector("#box4");

click2.onclick=()=>{
    let inner=box3.innerHTML;
    box3.innerHTML=box4.innerHTML;
    box4.innerHTML=inner;
}

let click3=document.querySelector("#click3");
let box5=document.querySelector("#box5");
let i=0;
click3.onclick=()=>{
    box5.style.fontSize='calc(14px + ' + i + 'px)';
    i++;
    if(i>10){
        box5.style.fontSize='14px';
        i-=10;
    }
}

