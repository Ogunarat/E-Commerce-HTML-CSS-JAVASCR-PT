function tabsFunc(){
    const btnTab = document.querySelectorAll(".tab-button");
    const contentDom = document.querySelectorAll(".content");
    const singleTabsWrapper = document.querySelector(".tab-list");
    
    singleTabsWrapper.addEventListener("click",(e)=>{
        e.preventDefault();
        const id = e.target.dataset.id;
        if(id){
            btnTab.forEach((button) => button.classList.remove("active"));
            e.target.classList.add("active");
            contentDom.forEach((content)=> content.classList.remove("active"));
            const element = document.getElementById(id);
            element.classList.add("active");
        }
    })
}
export default tabsFunc();