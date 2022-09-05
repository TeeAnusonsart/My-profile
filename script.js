let openLogin = document.querySelector(".picture");
let Warpper=document.querySelector(".setcenter");
let scrollinfo=document.querySelector(".tab");
let pic=document.getElementById("picture")
let mypic=document.getElementById("me")
let lastScrollY = 0;

openLogin.addEventListener("click",()=>{
    Warpper.classList.toggle("open");
    if (mypic.src==("mypic.jpg")){
        mypic.src="me.jpg";
    }
    else{
        mypic.src="mypic.jpg";
    }

});

pic.addEventListener("click",()=>{
    alert("ยังไม่พร้อมใช้งาน(หารูปก่อนน)")
})

window.addEventListener('scroll',()=>{
    if (window.scrollY > lastScrollY){
        scrollinfo.classList.add("hide")
    ;}
    else{
        scrollinfo.classList.remove('hide')
    }
    lastScrollY=window.scrollY;
})
