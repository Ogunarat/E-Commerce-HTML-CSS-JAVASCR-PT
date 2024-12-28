import headerFunc from "./header.js";
import productFunc from "./product.js";
import searchFunc from "./search.js";



//! add products to localstorage start
(async function(){
    const photos = await fetch("../js/data.json");
    const data = await photos.json();

    data ? localStorage.setItem("products",JSON.stringify(data)) : [];

    productFunc(data);
    searchFunc(data);
})();
//! add products to localstorage end

//! add cardItems to localstorage start

const cartItems = document.querySelector(".header-cart-count");
cartItems.innerHTML = localStorage.getItem("card") ? JSON.parse(localStorage.getItem("card")).length : "0";

//! add cardItems to localstorage end

//!modal dialog start
const modalDialogDom = document.querySelector(".modal-dialog");
const modalContentDom = document.querySelector(".modal-dialog .modal-content");
const btnCloseDom = document.querySelector(".modal-dialog .modal-close");

btnCloseDom.addEventListener("click",()=>{
    modalDialogDom.classList.remove("show");
})

document.addEventListener("click",(e)=>{
    if(!e.composedPath().includes(modalContentDom)){
        modalDialogDom.classList.remove("show");
    }
})

setTimeout(() => {
    modalDialogDom.classList.add("show");
}, 3000);



//!modal dialog end