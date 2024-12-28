import { thumbsActiveFunc } from "./single-product/thumbsActive.js";
import { singleThumbs } from "./glide.js";
import zoomImageFunc from "./single-product/zoom.js"
import colorsFunc from "./single-product/colors.js"
import valuesFunc from "./single-product/values.js"
import tabsFunc from "./single-product/tabs.js"
import commentFunc from "./single-product/comment.js"

const productID = localStorage.getItem("productID") 
? JSON.parse(localStorage.getItem("productID"))
: localStorage.setItem("productID",JSON.stringify(1));

const products = localStorage.getItem("products") 
? JSON.parse(localStorage.getItem("products"))
: localStorage.setItem("products",JSON.stringify([]));

const findProduct = products.find((item)=> item.id === Number(productID));

//product-title
const productTitle = document.querySelector(".product-title");
productTitle.innerHTML = findProduct.name;

//product-price
const oldPrice = document.querySelector(".old-price");
const newPrice = document.querySelector(".new-price");

oldPrice.innerHTML = findProduct.price.oldPrice.toFixed(2);
newPrice.innerHTML = findProduct.price.newPrice.toFixed(2);

//image
const singleImage = document.querySelector(".singleImage");
singleImage.src = findProduct.img.singleImage;

//image thumbs
const galeryThumbs = document.querySelector(".galery-thumb");
let result = "";

findProduct.img.thumbs.forEach((item) => {
    result += `
    <li class="glide__slide"><img src=${item} alt="" class="img-fluit"></li>
    `
    
});
galeryThumbs.innerHTML = result;
singleThumbs();
thumbsActiveFunc();
//thumbs active
const productThumbs = document.querySelectorAll(".product-thumb .glide__slide img");
productThumbs[0].classList.add("active");

//add to card
let card = localStorage.getItem("card") 
? JSON.parse(localStorage.getItem("card")) 
: [];
const finCard = card.find((item)=> item.id === findProduct.id);
const quantity = document.getElementById("quantity");
const btnAddToCard = document.getElementById("addToCard");
let cardItems = document.querySelector(".header-cart-count");

if(finCard){
    btnAddToCard.setAttribute("disabled","disabled");
}else{
    btnAddToCard.addEventListener("click",()=>{
        card.push({...findProduct,quantity: Number(quantity.value)});
        btnAddToCard.setAttribute("disabled","disabled");
        localStorage.setItem("card",JSON.stringify(card));
        cardItems.innerHTML = card.length;
    })
}
