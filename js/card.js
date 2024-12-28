let card = localStorage.getItem("card") ? JSON.parse(localStorage.getItem("card")) : [];



function displayCardProduct(){
    const cardContainer = document.querySelector(".cart-wrapper-tbody")
    let results = "";
    card.forEach((item) => {
        results +=`
            <tr class="cart-item">
                <td></td>
                <td class="cart-image">
                    <img src="${item.img.singleImage}" alt="">
                    <i class="bi bi-x delete-cart" data-id=${item.id}></i>
                </td>
                <td>${item.name}</td>
                <td>$${item.price.newPrice.toFixed(2)}</td>
                <td class="product-quantity">${item.quantity}</td>
                <td class="product-subtotal">$${(item.price.newPrice * item.quantity).toFixed(2)}</td>
            </tr>
        `
       cardContainer ? cardContainer.innerHTML = results : [];
       removeCardItem();
    });
}
displayCardProduct();

function removeCardItem(){
    let cardItems = document.querySelector(".header-cart-count");
    const deleteBtnCard = document.querySelectorAll(".delete-cart");

    deleteBtnCard.forEach((button)=>{
        button.addEventListener("click",function(e){
            const id = e.target.dataset.id;
            card = card.filter((item)=> item.id !== Number(id));
            displayCardProduct();
            localStorage.setItem("card",JSON.stringify(card));
            cardItems.innerHTML = card.length;
            saveCardValues();
        })
    })
}

function saveCardValues(){
    const subtotal = document.getElementById("subtotal");
    const cardTotal = document.getElementById("card-total");
    const fastCargo = document.getElementById("fast-cargo");
    const fastCargoPrice = 15;
    let itemTotals = 0;

    card.length > 0 && card.map((item)=>(itemTotals += item.price.newPrice * item.quantity))
    subtotal.innerHTML = `$${itemTotals.toFixed(2)}`;
    cardTotal.innerHTML = `$${itemTotals.toFixed(2)}`;

    fastCargo.addEventListener("change",(e)=>{
        if(e.target.checked){
            cardTotal.innerHTML = `$${(itemTotals+fastCargoPrice).toFixed(2)}`
        }else{
            cardTotal.innerHTML = `$${itemTotals.toFixed(2)}`;
        }
    });
}
saveCardValues();


