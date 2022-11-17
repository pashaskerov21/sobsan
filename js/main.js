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

let altCategoryPanelButtons = document.querySelectorAll(".alt-category-panel-button");
let altCategoryPanelButtonLinks = document.querySelectorAll(".alt-category-panel-button .bottom-nav-link");
let altCategoryPanel = document.querySelector(".alt-category-panel");
let altCategoryPanelMenu = document.querySelectorAll(".alt-category-panel-menu")

for(let i = 0; i < altCategoryPanelButtons.length; i++){
    (function(index){
        altCategoryPanelButtons[index].addEventListener("mouseover",function(){
            altCategoryPanel.classList.remove("d-none");
            for(let i = 0; i < altCategoryPanelMenu.length; i++){
                altCategoryPanelMenu[i].classList.add("d-none")
            }
            altCategoryPanelMenu[index].classList.remove("d-none");
        });
        altCategoryPanelButtons[index].addEventListener("mouseout",function(){
            altCategoryPanel.classList.add("d-none");
        });
        altCategoryPanel.addEventListener("mouseover",function(){
            altCategoryPanel.classList.remove("d-none");
        });
        altCategoryPanel.addEventListener("mouseout",function(){
            altCategoryPanel.classList.add("d-none");
        });

    })(i);
}
