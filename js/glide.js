const productContainer = document.getElementById("product-list");
const thumbList = document.getElementById("thumb-list");

export function products1(){
    const config = {
        
        perView: 4,
        gap: 20,
        bound:true,
        breakpoints : {
            992:{
                perView:3
            },
            768:{
                perView:2
            },
            576:{
                perView:1
            }
        }
    }
    
   productContainer && new Glide('.product-carousel',config).mount()
}



    const config2 = {
        
        perView: 4,
        gap: 20,
    
        breakpoints : {
            992:{
                perView:3
            },
            768:{
                perView:2
            },
            576:{
                perView:1
            }
        }
    }
    
    productContainer && new Glide('.product-carousel2',config2).mount()

export function singleThumbs(){
    const config3 = {
        
        perView: 3,
        
        breakpoints : {
            992:{
                perView:3
            },
            768:{
                perView:2
            },
            576:{
                perView:1
            }
        }
    }
    
     new Glide('.product-thumb',config3).mount();
}
  
