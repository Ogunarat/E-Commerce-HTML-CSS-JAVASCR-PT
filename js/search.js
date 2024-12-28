function productRoute(){
    const resultItemDom = document.querySelectorAll(".search-result .result-item");
    resultItemDom.forEach((item)=>{
        item.addEventListener("click",()=>{
            const id = item.dataset.id;
            if(id){
                localStorage.setItem("productID",JSON.stringify(id));
                window.location.href ="single-product.html";
            }
        })
    })
}


function searchFunc(data){
const searchResultDom = document.querySelector(".search-result .results");
let result = "";
data.forEach((item) => {
    result += `
            <a href="#" class="result-item" data-id=${item.id}>
                <img class="search-thumb" src=${item.img.singleImage}>
                <div class="search-info">
                    <h4>${item.name}</h4>
                    <span class="search-sku">SKU: PD0016</span>
                    <span class="search-price">$${item.price.newPrice.toFixed(2)}</span>
                </div>
            </a>
`

});
searchResultDom.innerHTML = result;
productRoute();

const searcInputDom  = document.querySelector(".search-form input");
let value = "";
let filtered = [];
searcInputDom.addEventListener("input",function(e){
    value = e.target.value;
    value = value.trim().toLowerCase();
    filtered = data.filter((item)=>item.name.trim().toLowerCase().includes(value));
    let result = "";
    if(filtered.length > 1){
        searchResultDom.style.gridTemplateColumns = "1fr 1fr";
        filtered.forEach((item)=>{
            result += `
            <a href="#" class="result-item" data-id=${item.id}>
                <img class="search-thumb" src=${item.img.singleImage}>
                <div class="search-info">
                    <h4>${item.name}</h4>
                    <span class="search-sku">SKU: PD0016</span>
                    <span class="search-price">$${item.price.newPrice.toFixed(2)}</span>
                </div>
            </a>
        `
        });
        searchResultDom.innerHTML = result;
    }else if(filtered.length < 2){
        searchResultDom.style.gridTemplateColumns = "1fr";
        if(filtered.length == 0){
            searchResultDom.innerHTML = 
            `
            <a href="#" class="result-item" style="justify-content:center">
                😔Aradığınız Ürün Bulunamadı😔
            </a>
            `
        }else{
            filtered.forEach((item)=>{
                result += `
                <a href="#" class="result-item" data-id=${item.id}>
                    <img class="search-thumb" src=${item.img.singleImage}>
                    <div class="search-info">
                        <h4>${item.name}</h4>
                        <span class="search-sku">SKU: PD0016</span>
                        <span class="search-price">$${item.price.newPrice.toFixed(2)}</span>
                    </div>
                </a>
            `
            });
            searchResultDom.innerHTML = result;
        }
        
    }
    productRoute();
})

}
export default searchFunc;