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
// hàm remove
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
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// jQuery
$(document).ready(function(){
    $(".modal-overlay").click(function(){
        $(".main-modal").hide();
    });
    
    $(".close-modal").click(function(){
        $(".main-modal").hide();
    });
    
})

// window.onload=function(){
//     let category=document.querySelectorAll(".category>li")
//     for(let cate of category)
//         cate.onmousemove=function(){
//             let d = document.getElementsByClassName("sub-category")
//         }
// }   


//scrollbutton
const scrollToTopButton = document.getElementById("scrollToTopButton");

window.addEventListener("scroll", function(){
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      scrollToTopButton.style.opacity = 1;
      scrollToTopButton.style.transform = "scale(1)";
    }, 500);
  });
scrollToTopButton.addEventListener("click", () => {
  const scrollDuration = 1000;
  const scrollStep = -window.scrollY / (scrollDuration / 15);

  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
});
