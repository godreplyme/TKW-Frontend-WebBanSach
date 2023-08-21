//----------hàm lấy dữ liệu sản phẩm từ json để thêm vào giỏ hàng----------//
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
function addLocalStorageCate(){
    const cartBtn=document.querySelectorAll(".cart-btn")
    cartBtn.forEach(function(button,index){
        button.addEventListener("click",function(event){
            var btnItem=event.target 
            // console.log(btnItem)
            var product=btnItem.parentElement
            // console.log(product)
            var productImg=product.querySelector(".product img").src
            var productName=product.querySelector(".name").innerText
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
//----------hàm lấy dữ liệu sản phẩm từ json để thêm vào giỏ hàng----------//





//----------best-selling----------//
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
//----------best-selling----------//




// ----------sản phẩm trang chủ----------//

    //hàm load sẵn phần sách gk-gt sau khi trang chủ tải xong//
let productContainerSGK=document.querySelector(".products-container-sgk")
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


    //hàm khi nhấn vào mục sách giáo khoa//
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

    //hàm khi bấm vào mục tập vở//
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

    //hàm khi bấm vào mục đồ dùng học tập//
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
let productContainerNuocNgoai=document.querySelector(".products-container-nuocngoai")
fetch("js/storage.json").then(res=>res.json()).then(data=>{
    for(let d of data)
    { 
        if(d.type1=="sachvanhocnuocngoai"&&d.rawprice!=""){
        productContainerNuocNgoai.insertAdjacentHTML("beforeend",`
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
let productContainerManga=document.querySelector(".products-container-manga")
fetch("js/storage.json").then(res=>res.json()).then(data=>{
    for(let d of data)
    { 
        if(d.type1=="truyentranh-manga"){
        productContainerManga.insertAdjacentHTML("beforeend",`
        <div class="product">
        <img src="${d.image}">
        <h2 class="product-name">${d.name}</h2>
        <div class="price">${d.price}&#8363;</div>     
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
let productContainerTapChi=document.querySelector(".products-container-tapchi")
fetch("js/storage.json").then(res=>res.json()).then(data=>{
    for(let d of data)
    { 
        if(d.type1=="tapchi-vanphongpham"){
        productContainerTapChi.insertAdjacentHTML("beforeend",`
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


    //hàm load sẵn phần sách sách trong nước sau khi trang chủ tải xong//
let productContainerTrongNuoc=document.querySelector(".products-container-trongnuoc")
fetch("js/storage.json").then(res=>res.json()).then(data=>{
    for(let d of data)
    { 
        if(d.type2=="vanhoc"&&d.rawprice!=""){
        productContainerTrongNuoc.insertAdjacentHTML("beforeend",`
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

    //hàm bấm vào mục văn học// 
function SachTrongNuocVanHoc(){
    productContainerTrongNuoc.innerHTML = '';
    fetch("js/storage.json").then(res=>res.json()).then(data=>{
        for(let d of data)
        { 
            if(d.type2=="vanhoc"&&d.rawprice!=""){
            productContainerTrongNuoc.insertAdjacentHTML("beforeend",`
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

function SachTrongNuocKinhTe(){
    productContainerTrongNuoc.innerHTML = '';
    fetch("js/storage.json").then(res=>res.json()).then(data=>{
        for(let d of data)
        { 
            if(d.type1=="sachvanhocnuocngoai"&&d.rawprice!=""){
            productContainerTrongNuoc.insertAdjacentHTML("beforeend",`
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

        //hàm bấm vào mục kỹ năng//
function SachTrongNuocKyNang(){
    productContainerTrongNuoc.innerHTML = '';
    fetch("js/storage.json").then(res=>res.json()).then(data=>{
        for(let d of data)
        { 
            if(d.type1=="sachchuyennganh"&&d.rawprice!=""){
            productContainerTrongNuoc.insertAdjacentHTML("beforeend",`
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
// ----------Sản phẩm trang chủ----------//



//----------Trang danh mục sản phẩm----------//
let productContainer=document.querySelector(".product-content")
    productContainer.innerHTML = '';
        fetch("js/storage.json").then(res=>res.json()).then(data=>{
            for(let d of data)
            {
                if(d.type1=="best"&&d.rawprice!=""){
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
                if(d.type1=="best"&&d.rawprice==""){
                    productContainer.insertAdjacentHTML("beforeend",`
                    <div class="product">
                        <img src="${d.image}">
                        <h2 class="name" title=${d.name}>${d.name}</h2>
                        <div class="price">${d.price}&#8363;</div>
                        <button class="cart-btn animate__animated animate__pulse">THÊM VÀO GIỎ HÀNG</button>
                    </div>
                    `)}
            }
            addLocalStorageCate()
    })

    //mục sách giáo khoa - giáo trình//
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
            addLocalStorageCate()
        })
}

    //mục sách giáo khoa - giáo trình (cấp1)//
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
            addLocalStorageCate()
        })
}


    //mục sách giáo khoa - giáo trình (cấp1)//
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
            addLocalStorageCate()
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
            addLocalStorageCate()
    })
}

function sachGiaoKhoaDaiHoc(){
    let productContainer=document.querySelector(".product-content")
    productContainer.innerHTML = '';
        fetch("js/storage.json").then(res=>res.json()).then(data=>{
            for(let d of data)
            {
                if(d.type1=="sachgk"&&d.rawprice!=""&&d.type2=="daihoc"){
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
                if(d.type1=="sachgk"&&d.rawprice==""&&d.type2=="daihoc"){
                    productContainer.insertAdjacentHTML("beforeend",`
                    <div class="product">
                        <img src="${d.image}">
                        <h2 class="name" title=${d.name}>${d.name}</h2>
                        <div class="price">${d.price}&#8363;</div>
                        <button class="cart-btn animate__animated animate__pulse">THÊM VÀO GIỎ HÀNG</button>
                    </div>
                    `)}
            }
            addLocalStorageCate()
    })
}
function sachBanChay(){
    let productContainer=document.querySelector(".product-content")
    productContainer.innerHTML = '';
        fetch("js/storage.json").then(res=>res.json()).then(data=>{
            for(let d of data)
            {
                if(d.type1=="best"&&d.rawprice!=""){
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
                if(d.type1=="best"&&d.rawprice==""){
                    productContainer.insertAdjacentHTML("beforeend",`
                    <div class="product">
                        <img src="${d.image}">
                        <h2 class="name" title=${d.name}>${d.name}</h2>
                        <div class="price">${d.price}&#8363;</div>
                        <button class="cart-btn animate__animated animate__pulse">THÊM VÀO GIỎ HÀNG</button>
                    </div>
                    `)}
            }
            addLocalStorageCate()
    })
}
function sachMoiPhatHanh(){
    let productContainer=document.querySelector(".product-content")
    productContainer.innerHTML = '';
        fetch("js/storage.json").then(res=>res.json()).then(data=>{
            for(let d of data)
            {
                if(d.type1=="sachmoiphathanh"&&d.rawprice!=""){
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
                if(d.type1=="sachmoiphathanh"&&d.rawprice==""){
                    productContainer.insertAdjacentHTML("beforeend",`
                    <div class="product">
                        <img src="${d.image}">
                        <h2 class="name" title=${d.name}>${d.name}</h2>
                        <div class="price">${d.price}&#8363;</div>
                        <button class="cart-btn animate__animated animate__pulse">THÊM VÀO GIỎ HÀNG</button>
                    </div>
                    `)}
            }
            addLocalStorageCate()
    })
}
function sachSapPhatHanh(){
    let productContainer=document.querySelector(".product-content")
    productContainer.innerHTML = '';
        fetch("js/storage.json").then(res=>res.json()).then(data=>{
            for(let d of data)
            {
                if(d.type1=="sachsapphathanh"&&d.rawprice!=""){
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
                if(d.type1=="sachsapphathanh"&&d.rawprice==""){
                    productContainer.insertAdjacentHTML("beforeend",`
                    <div class="product">
                        <img src="${d.image}">
                        <h2 class="name" title=${d.name}>${d.name}</h2>
                        <div class="price">${d.price}&#8363;</div>
                        <button class="cart-btn animate__animated animate__pulse">THÊM VÀO GIỎ HÀNG</button>
                    </div>
                    `)}
            }
            addLocalStorageCate()
    })
}
function sachVanHocTrongNuoc(){
    let productContainer=document.querySelector(".product-content")
    productContainer.innerHTML = '';
        fetch("js/storage.json").then(res=>res.json()).then(data=>{
            for(let d of data)
            {
                if(d.type1=="sachvanhoctrongnuoc"&&d.rawprice!=""){
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
                if(d.type1=="sachvanhoctrongnuoc"&&d.rawprice==""){
                    productContainer.insertAdjacentHTML("beforeend",`
                    <div class="product">
                        <img src="${d.image}">
                        <h2 class="name" title=${d.name}>${d.name}</h2>
                        <div class="price">${d.price}&#8363;</div>
                        <button class="cart-btn animate__animated animate__pulse">THÊM VÀO GIỎ HÀNG</button>
                    </div>
                    `)}
            }
            addLocalStorageCate()
    })
}
function sachPheBinhVanHoc(){
    let productContainer=document.querySelector(".product-content")
    productContainer.innerHTML = '';
        fetch("js/storage.json").then(res=>res.json()).then(data=>{
            for(let d of data)
            {
                if(d.type1=="sachvanhoctrongnuoc"&&d.rawprice!=""&&d.type2=="sachphebinhvanhoc"){
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
                if(d.type1=="sachvanhoctrongnuoc"&&d.rawprice==""&&d.type2=="sachphebinhvanhoc"){
                    productContainer.insertAdjacentHTML("beforeend",`
                    <div class="product">
                        <img src="${d.image}">
                        <h2 class="name" title=${d.name}>${d.name}</h2>
                        <div class="price">${d.price}&#8363;</div>
                        <button class="cart-btn animate__animated animate__pulse">THÊM VÀO GIỎ HÀNG</button>
                    </div>
                    `)}
            }
            addLocalStorageCate()
    })
}
function sachPhongSuKySu(){
    let productContainer=document.querySelector(".product-content")
    productContainer.innerHTML = '';
        fetch("js/storage.json").then(res=>res.json()).then(data=>{
            for(let d of data)
            {
                if(d.type1=="sachvanhoctrongnuoc"&&d.rawprice!=""&&d.type2=="phongsu-kysu"){
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
                if(d.type1=="sachvanhoctrongnuoc"&&d.rawprice==""&&d.type2=="phongsu-kysu"){
                    productContainer.insertAdjacentHTML("beforeend",`
                    <div class="product">
                        <img src="${d.image}">
                        <h2 class="name" title=${d.name}>${d.name}</h2>
                        <div class="price">${d.price}&#8363;</div>
                        <button class="cart-btn animate__animated animate__pulse">THÊM VÀO GIỎ HÀNG</button>
                    </div>
                    `)}
            }
            addLocalStorageCate()
    })
}
function sachThoCa(){
    let productContainer=document.querySelector(".product-content")
    productContainer.innerHTML = '';
        fetch("js/storage.json").then(res=>res.json()).then(data=>{
            for(let d of data)
            {
                if(d.type1=="sachvanhoctrongnuoc"&&d.rawprice!=""&&d.type2=="thoca"){
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
                if(d.type1=="sachvanhoctrongnuoc"&&d.rawprice==""&&d.type2=="thoca"){
                    productContainer.insertAdjacentHTML("beforeend",`
                    <div class="product">
                        <img src="${d.image}">
                        <h2 class="name" title=${d.name}>${d.name}</h2>
                        <div class="price">${d.price}&#8363;</div>
                        <button class="cart-btn animate__animated animate__pulse">THÊM VÀO GIỎ HÀNG</button>
                    </div>
                    `)}
            }
            addLocalStorageCate()
    })
}
function sachTieuThuyetLangMan(){
    let productContainer=document.querySelector(".product-content")
    productContainer.innerHTML = '';
        fetch("js/storage.json").then(res=>res.json()).then(data=>{
            for(let d of data)
            {
                if(d.type1=="sachvanhoctrongnuoc"&&d.rawprice!=""&&d.type2=="tieuthuyetlangman"){
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
                if(d.type1=="sachvanhoctrongnuoc"&&d.rawprice==""&&d.type2=="tieuthuyetlangman"){
                    productContainer.insertAdjacentHTML("beforeend",`
                    <div class="product">
                        <img src="${d.image}">
                        <h2 class="name" title=${d.name}>${d.name}</h2>
                        <div class="price">${d.price}&#8363;</div>
                        <button class="cart-btn animate__animated animate__pulse">THÊM VÀO GIỎ HÀNG</button>
                    </div>
                    `)}
            }
            addLocalStorageCate()
    })
}
function sachTruyenDai(){
    let productContainer=document.querySelector(".product-content")
    productContainer.innerHTML = '';
        fetch("js/storage.json").then(res=>res.json()).then(data=>{
            for(let d of data)
            {
                if(d.type1=="sachvanhoctrongnuoc"&&d.rawprice!=""&&d.type2=="truyendai"){
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
                if(d.type1=="sachvanhoctrongnuoc"&&d.rawprice==""&&d.type2=="truyendai"){
                    productContainer.insertAdjacentHTML("beforeend",`
                    <div class="product">
                        <img src="${d.image}">
                        <h2 class="name" title=${d.name}>${d.name}</h2>
                        <div class="price">${d.price}&#8363;</div>
                        <button class="cart-btn animate__animated animate__pulse">THÊM VÀO GIỎ HÀNG</button>
                    </div>
                    `)}
            }
            addLocalStorageCate()
    })
}
function sachTruyenGiaTuongThanBi(){
    let productContainer=document.querySelector(".product-content")
    productContainer.innerHTML = '';
        fetch("js/storage.json").then(res=>res.json()).then(data=>{
            for(let d of data)
            {
                if(d.type1=="sachvanhoctrongnuoc"&&d.rawprice!=""&&d.type2=="truyengiatuong-thanbi"){
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
                if(d.type1=="sachvanhoctrongnuoc"&&d.rawprice==""&&d.type2=="truyengiatuong-thanbi"){
                    productContainer.insertAdjacentHTML("beforeend",`
                    <div class="product">
                        <img src="${d.image}">
                        <h2 class="name" title=${d.name}>${d.name}</h2>
                        <div class="price">${d.price}&#8363;</div>
                        <button class="cart-btn animate__animated animate__pulse">THÊM VÀO GIỎ HÀNG</button>
                    </div>
                    `)}
            }
            addLocalStorageCate()
    })
}
function sachTruyenKiemHiep(){
    let productContainer=document.querySelector(".product-content")
    productContainer.innerHTML = '';
        fetch("js/storage.json").then(res=>res.json()).then(data=>{
            for(let d of data)
            {
                if(d.type1=="sachvanhoctrongnuoc"&&d.rawprice!=""&&d.type2=="truyenkiemhiep"){
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
                if(d.type1=="sachvanhoctrongnuoc"&&d.rawprice==""&&d.type2=="truyenkiemhiep"){
                    productContainer.insertAdjacentHTML("beforeend",`
                    <div class="product">
                        <img src="${d.image}">
                        <h2 class="name" title=${d.name}>${d.name}</h2>
                        <div class="price">${d.price}&#8363;</div>
                        <button class="cart-btn animate__animated animate__pulse">THÊM VÀO GIỎ HÀNG</button>
                    </div>
                    `)}
            }
            addLocalStorageCate()
    })
}
function sachTruyenNganTanVan(){
    let productContainer=document.querySelector(".product-content")
    productContainer.innerHTML = '';
        fetch("js/storage.json").then(res=>res.json()).then(data=>{
            for(let d of data)
            {
                if(d.type1=="sachvanhoctrongnuoc"&&d.rawprice!=""&&d.type2=="truyenngan-tanvan"){
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
                if(d.type1=="sachvanhoctrongnuoc"&&d.rawprice==""&&d.type2=="truyenngan-tanvan"){
                    productContainer.insertAdjacentHTML("beforeend",`
                    <div class="product">
                        <img src="${d.image}">
                        <h2 class="name" title=${d.name}>${d.name}</h2>
                        <div class="price">${d.price}&#8363;</div>
                        <button class="cart-btn animate__animated animate__pulse">THÊM VÀO GIỎ HÀNG</button>
                    </div>
                    `)}
            }
            addLocalStorageCate()
    })
}
function sachTruyenThieuNhi(){
    let productContainer=document.querySelector(".product-content")
    productContainer.innerHTML = '';
        fetch("js/storage.json").then(res=>res.json()).then(data=>{
            for(let d of data)
            {
                if(d.type1=="sachvanhoctrongnuoc"&&d.rawprice!=""&&d.type2=="truyenthieunhi"){
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
                if(d.type1=="sachvanhoctrongnuoc"&&d.rawprice==""&&d.type2=="truyenthieunhi"){
                    productContainer.insertAdjacentHTML("beforeend",`
                    <div class="product">
                        <img src="${d.image}">
                        <h2 class="name" title=${d.name}>${d.name}</h2>
                        <div class="price">${d.price}&#8363;</div>
                        <button class="cart-btn animate__animated animate__pulse">THÊM VÀO GIỎ HÀNG</button>
                    </div>
                    `)}
            }
            addLocalStorageCate()
    })
}
function sachTruyenTrinhThamVuAn(){
    let productContainer=document.querySelector(".product-content")
    productContainer.innerHTML = '';
        fetch("js/storage.json").then(res=>res.json()).then(data=>{
            for(let d of data)
            {
                if(d.type1=="sachvanhoctrongnuoc"&&d.rawprice!=""&&d.type2=="truyentrinhtham-vuan"){
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
                if(d.type1=="sachvanhoctrongnuoc"&&d.rawprice==""&&d.type2=="truyentrinhtham-vuan"){
                    productContainer.insertAdjacentHTML("beforeend",`
                    <div class="product">
                        <img src="${d.image}">
                        <h2 class="name" title=${d.name}>${d.name}</h2>
                        <div class="price">${d.price}&#8363;</div>
                        <button class="cart-btn animate__animated animate__pulse">THÊM VÀO GIỎ HÀNG</button>
                    </div>
                    `)}
            }
            addLocalStorageCate()
    })
}
function sachTuTruyenHoiKy(){
    let productContainer=document.querySelector(".product-content")
    productContainer.innerHTML = '';
        fetch("js/storage.json").then(res=>res.json()).then(data=>{
            for(let d of data)
            {
                if(d.type1=="sachvanhoctrongnuoc"&&d.rawprice!=""&&d.type2=="tutruyen-hoiky"){
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
                if(d.type1=="sachvanhoctrongnuoc"&&d.rawprice==""&&d.type2=="tutruyen-hoiky"){
                    productContainer.insertAdjacentHTML("beforeend",`
                    <div class="product">
                        <img src="${d.image}">
                        <h2 class="name" title=${d.name}>${d.name}</h2>
                        <div class="price">${d.price}&#8363;</div>
                        <button class="cart-btn animate__animated animate__pulse">THÊM VÀO GIỎ HÀNG</button>
                    </div>
                    `)}
            }
            addLocalStorageCate()
    })
}
function sachVanHocNuocNgoai(){
    let productContainer=document.querySelector(".product-content")
    productContainer.innerHTML = '';
        fetch("js/storage.json").then(res=>res.json()).then(data=>{
            for(let d of data)
            {
                if(d.type1=="sachvanhocnuocngoai"&&d.rawprice!=""){
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
                if(d.type1=="sachvanhocnuocngoai"&&d.rawprice==""){
                    productContainer.insertAdjacentHTML("beforeend",`
                    <div class="product">
                        <img src="${d.image}">
                        <h2 class="name" title=${d.name}>${d.name}</h2>
                        <div class="price">${d.price}&#8363;</div>
                        <button class="cart-btn animate__animated animate__pulse">THÊM VÀO GIỎ HÀNG</button>
                    </div>
                    `)}
            }
            addLocalStorageCate()
    })
}
function sachTinHocNgoaiNgu(){
    let productContainer=document.querySelector(".product-content")
    productContainer.innerHTML = '';
        fetch("js/storage.json").then(res=>res.json()).then(data=>{
            for(let d of data)
            {
                if(d.type1=="sachtinhoc-ngoaingu"&&d.rawprice!=""){
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
                if(d.type1=="sachtinhoc-ngoaingu"&&d.rawprice==""){
                    productContainer.insertAdjacentHTML("beforeend",`
                    <div class="product">
                        <img src="${d.image}">
                        <h2 class="name" title=${d.name}>${d.name}</h2>
                        <div class="price">${d.price}&#8363;</div>
                        <button class="cart-btn animate__animated animate__pulse">THÊM VÀO GIỎ HÀNG</button>
                    </div>
                    `)}
            }
            addLocalStorageCate()
    })
}
function sachChuyenNganh(){
    let productContainer=document.querySelector(".product-content")
    productContainer.innerHTML = '';
        fetch("js/storage.json").then(res=>res.json()).then(data=>{
            for(let d of data)
            {
                if(d.type1=="sachchuyennganh"&&d.rawprice!=""){
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
                if(d.type1=="sachchuyennganh"&&d.rawprice==""){
                    productContainer.insertAdjacentHTML("beforeend",`
                    <div class="product">
                        <img src="${d.image}">
                        <h2 class="name" title=${d.name}>${d.name}</h2>
                        <div class="price">${d.price}&#8363;</div>
                        <button class="cart-btn animate__animated animate__pulse">THÊM VÀO GIỎ HÀNG</button>
                    </div>
                    `)}
            }
            addLocalStorageCate()
    })
}
function sachTruyenTranhManga(){
    let productContainer=document.querySelector(".product-content")
    productContainer.innerHTML = '';
        fetch("js/storage.json").then(res=>res.json()).then(data=>{
            for(let d of data)
            {
                if(d.type1=="truyentranh-manga"&&d.rawprice!=""){
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
                if(d.type1=="truyentranh-manga"&&d.rawprice==""){
                    productContainer.insertAdjacentHTML("beforeend",`
                    <div class="product">
                        <img src="${d.image}">
                        <h2 class="name" title=${d.name}>${d.name}</h2>
                        <div class="price">${d.price}&#8363;</div>
                        <button class="cart-btn animate__animated animate__pulse">THÊM VÀO GIỎ HÀNG</button>
                    </div>
                    `)}
            }
            addLocalStorageCate()
    })
}
function sachTapChiVanPhongPham(){
    let productContainer=document.querySelector(".product-content")
    productContainer.innerHTML = '';
        fetch("js/storage.json").then(res=>res.json()).then(data=>{
            for(let d of data)
            {
                if(d.type1=="tapchi-vanphongpham"&&d.rawprice!=""){
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
                if(d.type1=="tapchi-vanphongpham"&&d.rawprice==""){
                    productContainer.insertAdjacentHTML("beforeend",`
                    <div class="product">
                        <img src="${d.image}">
                        <h2 class="name" title=${d.name}>${d.name}</h2>
                        <div class="price">${d.price}&#8363;</div>
                        <button class="cart-btn animate__animated animate__pulse">THÊM VÀO GIỎ HÀNG</button>
                    </div>
                    `)}
            }
            addLocalStorageCate()
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