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
                </div>
                `)}
                if(d.type1=="sachgk"&&d.rawprice==""){
                    productContainer.insertAdjacentHTML("beforeend",`
                    <div class="product">
                        <img src="${d.image}">
                        <h2 class="name" title=${d.name}>${d.name}</h2>
                        <div class="price">${d.price}&#8363;</div>
                    </div>
                    `)}
            }
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
                </div>
                `)}
                if(d.type1=="sachgk"&&d.rawprice==""&&d.type2=="cap1"){
                    productContainer.insertAdjacentHTML("beforeend",`
                    <div class="product">
                        <img src="${d.image}">
                        <h2 class="name" title=${d.name}>${d.name}</h2>
                        <div class="price">${d.price}&#8363;</div>
                    </div>
                    `)}
            }
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
                </div>
                `)}
                if(d.type1=="sachgk"&&d.rawprice==""&&d.type2=="cap2"){
                    productContainer.insertAdjacentHTML("beforeend",`
                    <div class="product">
                        <img src="${d.image}">
                        <h2 class="name" title=${d.name}>${d.name}</h2>
                        <div class="price">${d.price}&#8363;</div>
                    </div>
                    `)}
            }
    })
}
function sachGiaoKhoaCap3(){
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
                </div>
                `)}
                if(d.type1=="sachgk"&&d.rawprice==""&&d.type2=="cap2"){
                    productContainer.insertAdjacentHTML("beforeend",`
                    <div class="product">
                        <img src="${d.image}">
                        <h2 class="name" title=${d.name}>${d.name}</h2>
                        <div class="price">${d.price}&#8363;</div>
                    </div>
                    `)}
            }
    })
}
