
 const cursor = document.querySelector("#cursor");
 const cursor_blur = document.querySelector("#cursor-blur");
 document.addEventListener("mousemove",(e)=>{
    x = e.clientX;
    y = e.clientY;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
    cursor_blur.style.left = `${x}px`;
    cursor_blur.style.top = `${y}px`; 
   
 })



gsap.to("#nav" , {
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger : "#nav",
        scroller:"body",
        scrub:1,
        start : "top -10%",
        end : "top -11%",
    },
    
}
)

gsap.to("#main", {
    backgroundColor:"#000",
    duration:0.5,
    scrollTrigger :{
    trigger : "#main",
    scroll:"body",
    start : "top -25%",
    end : "top -75%",
    scrub:2,
    }
    
})




 const h4all =  document.querySelectorAll("#nav h4")
 h4all.forEach(function (elem) {
   elem.addEventListener("mouseenter", ()=>{
       cursor.style.scale = 3 ;
       cursor.style.border = "0.5px solid #fff";
       cursor.style.backgroundColor = "transparent"
   })
   elem.addEventListener("mouseleave", ()=>{
    cursor.style.scale = 1 ;
    cursor.style.border = "0px solid #95C11E";
    cursor.style.backgroundColor = "#95C11E"
})
 })

const h2fotter = document.querySelectorAll("footer h2");
 h2fotter.forEach(function (elem) {
    elem.addEventListener("mouseenter",(e)=>{
       elem.style.color ="#fff";
      


    })
    elem.addEventListener("mouseleave",(e)=>{
        elem.style.color ="#000000";
    
        
     })

 })

 document.querySelector("footer #one img").addEventListener("mouseenter",()=>{
    document.querySelector("footer #one img").style.scale = 0.85;
    document.querySelector("footer #one img").style.transition = "all ease 0.4s";
 })
 document.querySelector("footer #one img").addEventListener("mouseleave",()=>{
    document.querySelector("footer #one img").style.scale = 1;
    document.querySelector("footer #one img").style.transition = "all ease 0.4s";
 })

 
 gsap.from("#about-us , about-us-in",{
    y:50,
    opacity: 0 ,
    duration:1,
   
    scrollTrigger:{
        trigger:"#about-us",
        scroller : "body",
       
        start : "top 80%",
        end : "top 65%",
        scrub : 2 ,
    }
 }) 

 gsap.from("#cards-conatiner ,#cards ",{
    scale : 0.8 , 
    opacity: 0 ,
    duration:1,
   stagger:0.1,
    scrollTrigger:{
        trigger:".cards",
        scroller : "body",
       
        start : "top 90%",
        end : "top 80%",
        scrub : 2 ,
    }
 }) 
 
gsap.from("#colon1",{
    x:-50,
    y:-50,
    scrollTrigger:{
        trigger:"#colon1",
        scroll:"body",
        start:"top 50%",
        end :"top 40%",
        scrub: 4,
    }


})
gsap.from("#colon2",{
    x:70,
    y:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroll:"body",
        start:"top 50%",
        end :"top 40%",
        scrub: 4,
    }


})
gsap.from("#page4 h1 ",{
    y:50,
    duration:1,
    scrollTrigger:{
        trigger:"#page4",
        scroll:"body",
        start:"top 75%",
        end :"top 70%",
        scrub: 2,
        
    }

})