// slider
let countSlider=0;
function rightSlider(){
    document.querySelector(".slider-content-top-images").style.right=countSlider*100+('%');   
    let dotSlider = document.querySelectorAll(".slider-content-top-bottom li div");
    dotSlider.forEach(function(dot,count){
       if(countSlider==count)
       {
        removeActive();
        dot.classList.add("active")
       }
    })
    countSlider++; 
    if(countSlider>3)
    {
        countSlider=0;
    }
}   
function leftSlider(){
    document.querySelector(".slider-content-top-images").style.right=countSlider*100+('%');
    let dotSlider = document.querySelectorAll(".slider-content-top-bottom li div");
    dotSlider.forEach(function(dot,count){
       if(countSlider==count)
       {
        removeActive();
        dot.classList.add("active")
       }
    })
    countSlider--;   
    if(countSlider<0)
    {
        countSlider=3;
    }
} 
function removeActive(){
    let unActive = document.querySelector(".active")
    unActive.classList.remove('active')
}
document.addEventListener("DOMContentLoaded", function() {
    let dotSlider = document.querySelectorAll(".slider-content-top-bottom li div");
    dotSlider.forEach(function(dot,countSlider){
        dot.addEventListener("click",function(){
            document.querySelector(".slider-content-top-images").style.right=countSlider*100+('%');
            removeActive()
            dot.classList.add('active')
        })
    })
});
//product slider :))
var countSliderProduct=0;
function rightProduct(event){  
    event.target.parentElement.parentElement.querySelector(".products-container").style.right=countSliderProduct*20+('%');   
    countSliderProduct++; 
    if(countSliderProduct>10)
    {
        countSliderProduct=0;
    }
}   
function leftProduct(event){  
    event.target.parentElement.parentElement.querySelector(".products-container").style.right=countSliderProduct*20+('%');   
    countSliderProduct--; 
    if(countSliderProduct<0)
    {
        countSliderProduct=10;
    }
}   
var scrolltop=document.getElementById('myBtn')
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrolltop.style.display = "block";
    } else {
        scrolltop.style.display = "none";
    }
}
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
$(document).ready(function(){
    $(".modal-overlay").click(function(){
        $(".main-modal").hide();
    });
    
    $(".close-modal").click(function(){
        $(".main-modal").hide();
    });
    
})