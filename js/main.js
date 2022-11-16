let categoryButtons = document.querySelectorAll(".category-button");
let rightChevrons = document.querySelectorAll(".fa-chevron-right");

for(let i = 0; i< categoryButtons.length;i++){
    (function(index){
        categoryButtons[i].addEventListener("click",function(){
            if(categoryButtons[index].classList.contains("status-open")==false){
                categoryButtons[index].classList.add("status-open");
                rightChevrons[index].classList.remove("rotate-right");
                rightChevrons[index].classList.add("rotate-down");
            }else{
                categoryButtons[index].classList.remove("status-open");
                rightChevrons[index].classList.remove("rotate-down");
                rightChevrons[index].classList.add("rotate-right");
            }
        })
    })(i);
}

let topNavDropdowns = document.querySelectorAll(".tn-dropdown");
let topNavDropdownMenus = document.querySelectorAll(".tn-dropdown-menu");

for(let i = 0;i < topNavDropdowns.length;i++){
    (function(index){
        topNavDropdowns[i].addEventListener("mouseover",function(){
            topNavDropdownMenus[index].classList.remove("d-none")
        });
        topNavDropdowns[i].addEventListener("mouseout",function(){
            topNavDropdownMenus[index].classList.add("d-none")
        });
    })(i);
}