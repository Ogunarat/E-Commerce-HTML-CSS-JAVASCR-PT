import { products1 } from "./glide.js";




let card = localStorage.getItem("card") ? JSON.parse(localStorage.getItem("card")) : [];

 

function addToCard(products){
    const cardItems = document.querySelector(".header-cart-count")
    const buttons = [...document.getElementsByClassName("add-to-card")];
    buttons.forEach((button)=>{
       
        const inCard = card.find((item)=>item.id === Number(button.dataset.id))
        if(inCard){
            button.setAttribute("disabled","disabled");
        }else{
            button.addEventListener("click",function(e){
                e.preventDefault();
                const id = e.target.dataset.id;
                const findProduct = products.find((product)=>product.id === Number(id));
                card.push({...findProduct,quantity: 1});
                localStorage.setItem("card",JSON.stringify(card));
                button.setAttribute("disabled","disabled");
                cardItems.innerHTML = card.length;
            })
        }
    })
}

function productRoute(){
    const productLink = document.getElementsByClassName("product-link");
    Array.from(productLink).forEach((button)=>{
        button.addEventListener("click",(e)=>{
            e.preventDefault();
            const id = e.target.dataset.id;
            localStorage.setItem("productID",JSON.stringify(id));
            window.location.href = "single-product.html";
        })
    })
}


function productFunc(products){
     
    const productContainer = document.getElementById("product-list");
    
    let results = "";
    
    products.forEach((item) => {
        results += `
                        <li class="product-item glide__slide">
                            <div class="product-image">
                                <a href="#">
                                    <img class="img-1" src="${item.img.singleImage}" alt="">
                                    <img class="img-2" src="${item.img.thumbs[1]}" alt="">
                                </a>
                            </div>
                            <div class="product-info">
                                <a href="#" class="product-title">${item.name}</a>
                                <ul class="product-star">
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-fill"></i></li>
                                    <li><i class="bi bi-star-half"></i></li>
                                </ul>
                                <div class="product-prices">
                                    <strong class="new-price">$${item.price.newPrice.toFixed(2)}</strong>
                                    <span class="old-price">$${item.price.oldPrice.toFixed(2)}</span>
                                </div>
                                <span class="product-discount">-${item.discount}%</span>
                                <div class="product-links">
                                    <button class="add-to-card" data-id=${item.id}><i class="bi bi-basket-fill"></i></button>
                                    <button><i class="bi bi-heart-fill"></i></button>
                                    <a href="#" class="product-link" data-id=${item.id}><i class="bi bi-eye-fill"></i></a>
                                    <a href="#"><i class="bi bi-share-fill"></i></a>
                                </div>
                            </div>
                        </li>
        `
       productContainer ? productContainer.innerHTML = results : [];
        addToCard(products);
    });
    products1();
    productRoute();
}
export default productFunc;

