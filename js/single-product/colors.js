function colorsFunc(){
    const colors = document.querySelectorAll(".colors-wrapper-item")
    colors.forEach((color)=>{
        color.addEventListener("click",()=>{
            colors.forEach((item)=>{
                item.classList.remove("active");
            })
            color.classList.add("active");
        })
    })
}
export default colorsFunc();