function Cothebanquantam() {
    fetch("js/Products.json").then(res => res.json()).then(data => {
        let h ="";
        for(let p of data)
            h += `
                
                    <div>
                        <div><img title="Ứng dụng Web" src="${p.image}" alt="Books" /></div>
                            <div  class="word-font">
                                <span>${p.name}</span>
                            </div>
                            <div>
                                <span style="font-size: 1.3rem; color:tomato">${p.price}₫</span>
                            </div>  
                        <div class="pro-hint1" style="display: flex; align-items: baseline;">
                            <div>
                                <span style="text-decoration-line: line-through; padding-right: 0.5rem;">${p.cost}₫</span>
                            </div>
                            <div>    
                                <button>${p.discount}% giảm</button>
                            </div>
                        </div>
                    </div>
                
            `;
            let e = document.querySelector(".products-hint");
            if(e !== null)
            e.innerHTML += h;
    })
}