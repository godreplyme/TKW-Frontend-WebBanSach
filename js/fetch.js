window.onload=function(){
let productContainer=document.querySelector(".product-content")
fetch("js/storage.json").then(res=>res.json()).then(data=>{
    for(let d of data)
    {
        console.log('hello')
        productContainer.insertAdjacentHTML("beforeend",`
        <div class="product">
            <img src="${d.image}">
            <h2 class="name">${d.name}</h2>
            <div class="writer"><a>${d.writer}</a></div>
            <div class="price">${d.price}&#8363;</div>
            <ul class="prices">
                <li><span class="raw-price">${d.rawprice}&#8363;</span></li>
                <li><span class="offer">-${d.offer}%</span></li>
            </ul>
        </div>
        `)
    }
    })
}