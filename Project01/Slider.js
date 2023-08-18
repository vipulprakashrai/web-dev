const rightArrow = document.querySelector(".fa-caret-right");
const leftArrow = document.querySelector(".fa-caret-left");
const sliderElem = document.querySelector(".slider");
const Img = document.querySelectorAll(".img");
const bottom = document.querySelector(".bottom");
const btns = document.querySelectorAll(".button");

let slideNumber = 1;

btns[0].style.backgroundColor = 'white';

function deleteColor(){
    btns.forEach((button)=>{
     button.style.backgroundColor = "transparent";
    })
 }
 
 btns.forEach((button, i)=>{
     button.addEventListener("click", ()=>{
         deleteColor();
        sliderElem.style.transform = `translateX(-${i*550}px)`;
         slideNumber = i +1;
        button.style.backgroundColor = 'white' 
       
     })
 })
 

rightArrow.addEventListener("click", ()=>{
    if(slideNumber < Img.length){
        sliderElem.style.transform = `translateX(-${slideNumber*550}px)`;
        slideNumber++;
         
    }
    else{
        sliderElem.style.transform = `translateX(0px)`;
        slideNumber = 1;
    }
    deleteColor();
    btns[slideNumber-1].style.backgroundColor = 'white';

});

function lastSlide(){
    sliderElem.style.transform = `translateX(-${(Img.length-1)*550}px)`;
    slideNumber = Img.length;
}

function prevSlide(){
    sliderElem.style.transform = `translateX(-${(slideNumber-2)*550}px)`;
    slideNumber--;
}

leftArrow.addEventListener("click", ()=>{
   if(slideNumber > 1){
    prevSlide();
  
   }
   else{
    lastSlide();
   }
   deleteColor();
   btns[slideNumber-1].style.backgroundColor = 'white';
   
});


