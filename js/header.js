function sidebarFunc(){
    //! home sidebar start
    const btnOpenSidebar = document.getElementById("btnOpenSidebar");
    const sidebar = document.getElementById("sidebar");
    const closeSidebar = document.getElementById("closeSidebar");

    btnOpenSidebar.addEventListener("click",function () {
    sidebar.style.left = "0";
    })
    closeSidebar.addEventListener("click",()=>{
    sidebar.style.left = "-100%";
    })

//click outside start
    document.addEventListener("click",(event)=>{
        if(!event.composedPath().includes(sidebar) && !event.composedPath().includes(btnOpenSidebar)){
            sidebar.style.left = "-100%";
        }
    })
//click outside end
//! home sidebar end
}
function searchModalFunc(){
    //! modal search start
    const btnOpenSearch = document.querySelector(".search-toggle");
    const btnCloseSearch = document.querySelector("#close-search");
    const modalSearch = document.getElementsByClassName("modal-search");
    const modalSearchWrapper = document.getElementsByClassName("modal-wrapper");

    btnOpenSearch.addEventListener("click",()=>{
        modalSearch[0].style.visibility = "visible";
        modalSearch[0].style.opacity = "1";
    })

    btnCloseSearch.addEventListener("click",()=>{
        modalSearch[0].style.visibility = "hidden";
        modalSearch[0].style.opacity = "0";
    })
//click outside start
    document.addEventListener("click",function(e){
        if(!e.composedPath().includes(modalSearchWrapper[0]) && !e.composedPath().includes(btnOpenSearch)){
            modalSearch[0].style.visibility = "hidden";
            modalSearch[0].style.opacity = "0";
        }
    })
//click outside end
//! modal search end
}

function headerFunc(){
    sidebarFunc();
    searchModalFunc();
}

export default headerFunc();