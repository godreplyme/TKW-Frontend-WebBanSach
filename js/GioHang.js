function showCart(){
    var cart=JSON.parse(localStorage.getItem("cart"))

    if(cart!=null){
        var kq="";
        for(let i=0; i<cart.length;i++)
        {
            var tong=parseInt(cart[i]["gia"]*cart[i]["soluong"])
            kq+=`
            <div class="cart-container">
                <div class="cart-product">
                    <input class="box-tab" type="checkbox">
                    <img src="${cart[i]["hinh"]}">
                </div>      
                <div class="cart-name">
                    ${cart[i]["ten"]}
                </div>
                <div class="cart-price">${cart[i]["gia"]}</div>
                <div class="cart-amount">
                    ${cart[i]["soluong"]}
                </div>
                <div class="cart-activity">
                    <button>xóa <i class="fa-solid fa-x fa-2xs"></i></button>
                </div>
            </div>`
        }   
        document.querySelector(".cart-content").innerHTML=kq;
    }
}
function totalCart(){
    var cart=JSON.parse(localStorage.getItem("cart"))

    if(cart!=null){
        var total=0
        for(let i=0; i<cart.length;i++)
        {
            var tong=parseFloat(cart[i]["gia"])*parseFloat(cart[i]["soluong"])
            total+=tong
        }
        document.getElementById("total").innerHTML=total
    }
}
function deleteCart(){
    localStorage.removeItem("cart")
}
