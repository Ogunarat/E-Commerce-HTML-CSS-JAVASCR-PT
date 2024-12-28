const commentReviewsFunc = ()=>{
    const commentStars = document.querySelectorAll(".comment-form-rating .star");
    
    commentStars.forEach((item)=> {
        item.addEventListener("click",(e)=>{
            e.preventDefault();
            commentStars.forEach((star)=>star.classList.remove("active"));
            item.classList.add("active");
            
        })
    });
}
const addNewCommentFunc = function(){
    let comments = [];
    let commentTextDom = document.getElementById("commentText");
    let commentNameDom = document.getElementById("comment-name");
    let commentBtnDom = document.querySelector(".form-submit input");
    let commentListDom = document.querySelector(".comments-list");
    let commentName = "";
    let commentText = "";

    commentTextDom.addEventListener("input",function(e){
        commentText = e.target.value;
    })
    commentNameDom.addEventListener("input",function(e){
        commentName = e.target.value;
    })
    function addComment(e){
        e.preventDefault();
        comments.push({text:commentText,name:commentName});
        let result = "";
        comments.forEach((item)=>{
            result += `
                <li class="comment-item">
                    <div class="comment-avatar">
                        <img src="img/avatars/avatar1.jpg" alt="">
                    </div>
                    <div class="comment-text">
                        <ul class="comment-star">
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star-fill"></i></li>
                            <li><i class="bi bi-star-fill"></i></li>
                        </ul>
                        <div class="comment-meta">
                            <strong>${item.name}</strong>
                            -
                            <time>April 23, 2022</time>
                        </div>
                        <div class="comment-desc">
                            <p>${item.text}</p>
                        </div>
                    </div>
                </li>                   
            `
            
        })
        commentListDom.innerHTML = result;
        commentNameDom.value = "";
        commentTextDom.value = "";
        
    }
    commentBtnDom.addEventListener("click",addComment);
}

function commentFunc(){
    commentReviewsFunc();
    addNewCommentFunc();
}
export default commentFunc();