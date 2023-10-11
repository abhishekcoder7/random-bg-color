let generate = document.querySelector('#generate');
let stop = document.querySelector('#stop');
let screen = document.querySelector(".wrapper2");
let body = document.querySelector('body')
let bgColor;
let flag=false;
let randomHexa = ()=>{
    let newColor="#";
    let str = "0123456789ABCDEF";
    for(let i=0;i<6;i++){
        newColor+=str[Math.floor(Math.random()*16)];
    }
    return newColor;
}

let assignColor = ()=>{
    bgColor=setInterval(()=>{
        let x = randomHexa();
        body.style.backgroundColor=x;
        screen.style.backgroundColor=x;
        screen.innerHTML = x;
    },1000)
}

generate.addEventListener('click',()=>{
    if(flag==false){
        assignColor();
        flag=true;
    }
});
stop.addEventListener('click',()=>{
    clearInterval(bgColor);
    flag=false;
    bgColor=null
})