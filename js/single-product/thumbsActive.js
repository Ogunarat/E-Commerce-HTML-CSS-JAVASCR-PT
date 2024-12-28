export function thumbsActiveFunc (){
    const thumbs = document.querySelectorAll(".galery-thumb .img-fluit");
    const singleImage = document.querySelector(".singleImage");
    
    thumbs.forEach((item)=>{
        item.classList.remove("active");
        item.addEventListener("click",()=>{
            thumbs.forEach((e)=>{
                e.classList.remove("active");
            })
            singleImage.src = item.src
            item.classList.add("active");
        })
    })
}