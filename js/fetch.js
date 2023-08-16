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

