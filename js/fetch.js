var giohang=[]
var cartData = localStorage.getItem("cart");
if (cartData !== null) {
  giohang = JSON.parse(cartData); // Nếu có, gán dữ liệu từ localStorage cho giohang
}
function addLocalStorage(){
    const cartBtn=document.querySelectorAll(".cart-btn")
    cartBtn.forEach(function(button,index){
        button.addEventListener("click",function(event){
            var btnItem=event.target 
            // console.log(btnItem)
            var product=btnItem.parentElement
            // console.log(product)
            var productImg=product.querySelector(".product img").src
            var productName=product.querySelector(".product-name").innerText
            var productPrice=product.querySelector(".price").innerText
            var soluong=1
            var check=0

            for(let j=0;j<giohang.length;j++)
            {
                if(giohang[j]["ten"]==productName)
                {   
                    giohang[j]["soluong"]+=soluong
                    check=1
                    break
                }
            }
            if(check==0)
            {
                var sp={
                    "hinh":productImg,
                    "ten":productName,
                    "gia":productPrice,
                    "soluong":soluong
                }
                giohang.push(sp) 
            }
            alert("Đã thêm sản phẩm vào giỏ hàng!!!")
            localStorage.setItem("cart",JSON.stringify(giohang))
            var cart=JSON.parse(localStorage.getItem("cart"))
            if (cart!=null)
            {
                document.getElementById("soluong").innerHTML=cart.length
            }
        })
    })
}
//-----best-selling-----
let productContainerBest=document.querySelector(".bestselling-row2")
fetch("js/storage.json").then(res=>res.json()).then(data=>{
    for(let d of data)
    { 
        if(d.type1=="best"){
        productContainerBest.insertAdjacentHTML("beforeend",`
            <div class="bestselling-product">
                <div class="bestselling-product-offer">${d.offer}%</div>
                <div class="bestselling-product-image">
                    <img src="${d.image}">
                </div>
                <div class="bestselling-product-text">
                    <h1 class="bestselling-product-name">${d.name}</h1>
                    <div class="bestselling-product-price">${d.price}&#8363;</div>
                    <span class="bestselling-product-raw-price">${d.rawprice}&#8363;</span><br>
                    <ul class="bestselling-rate">
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        (0)
                    </ul>
                    <button class="xem-hang-btn">Xem hàng</button>
                </div>
            </div>
        `)}
        
    } 
 
})
//-----best-selling-----


// -----sản phẩm trang chủ-----
let productContainerSGK=document.querySelector(".products-container")
fetch("js/storage.json").then(res=>res.json()).then(data=>{
    for(let d of data)
    { 
        if(d.type1=="sachgk"&&d.rawprice!=""){
        productContainerSGK.insertAdjacentHTML("beforeend",`
        <div class="product">
        <img src="${d.image}">
        <h2 class="product-name">${d.name}</h2>
        <div class="price">${d.price}&#8363;</div>  
        <ul class="prices">
            <li><span class="raw-price">${d.rawprice}&#8363;</span></li>
            <li><span class="offer">${d.offer}%</span></li>
        </ul>   
        <ul class="rate">
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>   
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            (0)
        </ul>
        <button class="cart-btn animate__animated animate__pulse">THÊM VÀO GIỎ HÀNG</button>
    </div>
        `)}   
    }  
    addLocalStorage()   
})


function sachGiaoKhoaGT(event){

    productContainerSGK.innerHTML = '';
        fetch("js/storage.json").then(res=>res.json()).then(data=>{
            for(let d of data)
            {
                if(d.type1=="sachgk"&&d.rawprice!=""){
                   productContainerSGK.insertAdjacentHTML("beforeend",`
                    <div class="product">
                    <img src="${d.image}">
                    <h2 class="product-name">${d.name}</h2>
                    <div class="price">${d.price}&#8363;</div>  
                    <ul class="prices">
                        <li><span class="raw-price">${d.rawprice}&#8363;</span></li>
                        <li><span class="offer">${d.offer}%</span></li>
                    </ul>   
                    <ul class="rate">
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>   
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        (0)
                    </ul>
                    <button class="cart-btn animate__animated animate__pulse">THÊM VÀO GIỎ HÀNG</button>
                </div>
                    `)}
            }
            addLocalStorage()
    }) 
    
} 

function sachGiaoKhoaTapVo(event){
    productContainerSGK.innerHTML = '';
        fetch("js/storage.json").then(res=>res.json()).then(data=>{
            for(let d of data)
            {
                if(d.type1=="dodung"&&d.rawprice!=""&&d.type2=="tapvo"){
                    productContainerSGK.insertAdjacentHTML("beforeend",`
                    <div class="product">
                    <img src="${d.image}">
                    <h2 class="product-name">${d.name}</h2>
                    <div class="price">${d.price}&#8363;</div>  
                    <ul class="prices">
                        <li><span class="raw-price">${d.rawprice}&#8363;</span></li>
                        <li><span class="offer">${d.offer}%</span></li>
                    </ul>   
                    <ul class="rate">
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>   
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        (0)
                    </ul>
                    <button class="cart-btn animate__animated animate__pulse">THÊM VÀO GIỎ HÀNG</button>
                </div>
                    `)}
            }
            addLocalStorage()
    })
}

function sachGiaoKhoaDoDung(event){
    productContainerSGK.innerHTML = '';
        fetch("js/storage.json").then(res=>res.json()).then(data=>{
            for(let d of data)
            {
                if(d.type1=="dodung"&&d.rawprice!=""&&d.type2=="dungcu"){
                    productContainerSGK.insertAdjacentHTML("beforeend",`
                    <div class="product">
                    <img src="${d.image}">
                    <h2 class="product-name">${d.name}</h2>
                    <div class="price">${d.price}&#8363;</div>  
                    <ul class="prices">
                        <li><span class="raw-price">${d.rawprice}&#8363;</span></li>
                        <li><span class="offer">${d.offer}%</span></li>
                    </ul>   
                    <ul class="rate">
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>   
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        <li><i class="fa-solid fa-star"></i></li>
                        (0)
                    </ul>
                    <button class="cart-btn animate__animated animate__pulse">THÊM VÀO GIỎ HÀNG</button>
                </div>
                    `)}
            }
            addLocalStorage()
    })
}
// -----Sản phẩm trang chủ-----



function sachGiaoKhoa(){
    let productContainer=document.querySelector(".product-content")
    productContainer.innerHTML = '';
        fetch("js/storage.json").then(res=>res.json()).then(data=>{
            for(let d of data)
            {
                if(d.type1=="sachgk"&&d.rawprice!=""){
                productContainer.insertAdjacentHTML("beforeend",`
                <div class="product">
                    <img src="${d.image}">
                    <h2 class="name" title=${d.name}>${d.name}</h2>
                    <div class="price">${d.price}&#8363;</div>
                    <ul class="prices">
                        <li><span class="raw-price">${d.rawprice}&#8363;</span></li>
                        <li><span class="offer">-${d.offer}%</span></li>
                    </ul>
                    <button class="cart-btn animate__animated animate__pulse">THÊM VÀO GIỎ HÀNG</button>
                </div>
                `)}
                if(d.type1=="sachgk"&&d.rawprice==""){
                    productContainer.insertAdjacentHTML("beforeend",`
                    <div class="product">
                        <img src="${d.image}">
                        <h2 class="name" title=${d.name}>${d.name}</h2>
                        <div class="price">${d.price}&#8363;</div>
                        <button class="cart-btn animate__animated animate__pulse">THÊM VÀO GIỎ HÀNG</button>
                    </div>
                    
                    `)}
            }
            const cartBtn=document.querySelectorAll(".cart-btn")
    })
}
function sachGiaoKhoaCap1(){
    let productContainer=document.querySelector(".product-content")
    productContainer.innerHTML = '';
        fetch("js/storage.json").then(res=>res.json()).then(data=>{
            for(let d of data)
            {
                if(d.type1=="sachgk"&&d.rawprice!=""&&d.type2=="cap1"){
                productContainer.insertAdjacentHTML("beforeend",`
                <div class="product">
                    <img src="${d.image}">
                    <h2 class="name" title=${d.name}>${d.name}</h2>
                    <div class="price">${d.price}&#8363;</div>
                    <ul class="prices">
                        <li><span class="raw-price">${d.rawprice}&#8363;</span></li>
                        <li><span class="offer">-${d.offer}%</span></li>
                    </ul>
                    <button class="cart-btn animate__animated animate__pulse">THÊM VÀO GIỎ HÀNG</button>
                </div>
                `)}
                if(d.type1=="sachgk"&&d.rawprice==""&&d.type2=="cap1"){
                    productContainer.insertAdjacentHTML("beforeend",`
                    <div class="product">
                        <img src="${d.image}">
                        <h2 class="name" title=${d.name}>${d.name}</h2>
                        <div class="price">${d.price}&#8363;</div>
                        <button class="cart-btn animate__animated animate__pulse">THÊM VÀO GIỎ HÀNG</button>
                    </div>
                    `)}
            }
            const cartBtn=document.querySelectorAll(".cart-btn")
    })
}
function sachGiaoKhoaCap2(){
    let productContainer=document.querySelector(".product-content")
    productContainer.innerHTML = '';
        fetch("js/storage.json").then(res=>res.json()).then(data=>{
            for(let d of data)
            {
                if(d.type1=="sachgk"&&d.rawprice!=""&&d.type2=="cap2"){
                productContainer.insertAdjacentHTML("beforeend",`
                <div class="product">
                    <img src="${d.image}">
                    <h2 class="name" title=${d.name}>${d.name}</h2>
                    <div class="price">${d.price}&#8363;</div>
                    <ul class="prices">
                        <li><span class="raw-price">${d.rawprice}&#8363;</span></li>
                        <li><span class="offer">-${d.offer}%</span></li>
                    </ul>
                    <button class="cart-btn animate__animated animate__pulse">THÊM VÀO GIỎ HÀNG</button>
                </div>
                `)}
                if(d.type1=="sachgk"&&d.rawprice==""&&d.type2=="cap2"){
                    productContainer.insertAdjacentHTML("beforeend",`
                    <div class="product">
                        <img src="${d.image}">
                        <h2 class="name" title=${d.name}>${d.name}</h2>
                        <div class="price">${d.price}&#8363;</div>
                        <button class="cart-btn animate__animated animate__pulse">THÊM VÀO GIỎ HÀNG</button>
                    </div>
                    `)}
            }
            const cartBtn=document.querySelectorAll(".cart-btn")
    })
}
function sachGiaoKhoaCap3(){
    let productContainer=document.querySelector(".product-content")
    productContainer.innerHTML = '';
        fetch("js/storage.json").then(res=>res.json()).then(data=>{
            for(let d of data)
            {
                if(d.type1=="sachgk"&&d.rawprice!=""&&d.type2=="cap3"){
                productContainer.insertAdjacentHTML("beforeend",`
                <div class="product">
                    <img src="${d.image}">
                    <h2 class="name" title=${d.name}>${d.name}</h2>
                    <div class="price">${d.price}&#8363;</div>
                    <ul class="prices">
                        <li><span class="raw-price">${d.rawprice}&#8363;</span></li>
                        <li><span class="offer">-${d.offer}%</span></li>
                    </ul>
                    <button class="cart-btn animate__animated animate__pulse">THÊM VÀO GIỎ HÀNG</button>
                </div>
                `)}
                if(d.type1=="sachgk"&&d.rawprice==""&&d.type2=="cap3"){
                    productContainer.insertAdjacentHTML("beforeend",`
                    <div class="product">
                        <img src="${d.image}">
                        <h2 class="name" title=${d.name}>${d.name}</h2>
                        <div class="price">${d.price}&#8363;</div>
                        <button class="cart-btn animate__animated animate__pulse">THÊM VÀO GIỎ HÀNG</button>
                    </div>
                    `)}
            }
            const cartBtn=document.querySelectorAll(".cart-btn")
    })
}
function loadSoLuong()
{
    cart=JSON.parse(localStorage.getItem("cart"))
    if (cart!=null)
    {
        document.getElementById("soluong").innerHTML=cart.length
    }
}
function loadCart(){
    cart=JSON.parse(localStorage.getItem("cart"))
    if (cart!=null)
    {
        document.getElementById("soluongcart").innerHTML=cart.length
    }
}