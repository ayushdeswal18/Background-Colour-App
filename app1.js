const colors=["green","red","rgba(133,122,200)","#f15025"]
const button=document.getElementById("btn");
const color=document.querySelector(".color");
button.addEventListener("click",function(){
    
     const random=get();
     console.log(random)
     document.body.style.backgroundColor=colors[random]
     color.textContent=colors[random];

});
function get(){
    return parseInt(colors.length*(Math.random()));

}