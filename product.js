// list ve cell buttonlari

let listButton = document.querySelector(".right-filters .list-button");
let cellButton = document.querySelector(".right-filters .cell-button");

let productsWrapper = document.querySelector(".products-wrapper");  //products-wrapper-remastered
let productItem = document.querySelectorAll(".products-wrapper .product-item");  //product-item-remastered
let productCard = document.querySelectorAll(".products-wrapper .product-item .sobsan-product-card"); //card-remastered
let productCardHeader = document.querySelectorAll(".products-wrapper .product-item .sobsan-product-card .spc-header"); //card-header-remastered
let productCardImageDiv = document.querySelectorAll(".products-wrapper .product-item .sobsan-product-card .spc-header .spc-image"); //card-image-div-remastered
let productCardInfo = document.querySelectorAll(".products-wrapper .product-item .sobsan-product-card .normal-info"); //card-info-remastered
let productCardDesc = document.querySelectorAll(".products-wrapper .product-item .sobsan-product-card .spc-info .description"); //.card-description-remastered
let productCardFooter = document.querySelectorAll(".products-wrapper .product-item .sobsan-product-card .spc-footer"); //card-footer-remastered
let productCardFooterButtons = document.querySelectorAll(".products-wrapper .product-item .sobsan-product-card .spc-footer .card-button"); //card-button-remastered
let productCardFooterButtonName = document.querySelectorAll(".products-wrapper .product-item .sobsan-product-card .spc-footer .card-button .btn-name");




listButton.addEventListener("click",function(){
    cellButton.classList.remove("active-filter-button");
    listButton.classList.add("active-filter-button");

    productsWrapper.classList.add("products-wrapper-remastered");
    for(let i = 0; i < productItem.length; i++){
        productItem[i].classList.remove("col-6","col-xl-4");
        productItem[i].classList.add("col-12","product-item-remastered");
    }
    for(let i = 0; i < productCard.length;i++){
        productCard[i].classList.add("card-remastered");
        productCardHeader[i].classList.add("card-header-remastered");
        productCardImageDiv[i].classList.add("card-image-div-remastered");
        productCardInfo[i].classList.add("card-info-remastered");
        productCardDesc[i].classList.add("card-description-remastered");
        productCardFooter[i].classList.add("card-footer-remastered");
    }
    for(let i = 0; i < productCardFooterButtons.length;i++){
        productCardFooterButtons[i].classList.add("card-button-remastered");
    }
    for(let i = 0; i < productCardFooterButtonName.length;i++){
        productCardFooterButtonName[i].classList.add("d-none");
    }
});



cellButton.addEventListener("click",function(){
    listButton.classList.remove("active-filter-button");
    cellButton.classList.add("active-filter-button");

    productsWrapper.classList.remove("products-wrapper-remastered");
    for(let i = 0; i < productItem.length; i++){
        productItem[i].classList.remove("col-12","product-item-remastered");
        productItem[i].classList.add("col-6","col-xl-4");   
    }
    for(let i = 0; i < productCard.length;i++){
        productCard[i].classList.remove("card-remastered");
        productCardHeader[i].classList.remove("card-header-remastered");
        productCardImageDiv[i].classList.remove("card-image-div-remastered");
        productCardInfo[i].classList.remove("card-info-remastered");
        productCardDesc[i].classList.remove("card-description-remastered");
        productCardFooter[i].classList.remove("card-footer-remastered");
    }
    for(let i = 0; i < productCardFooterButtons.length;i++){
        productCardFooterButtons[i].classList.remove("card-button-remastered");
    }
    for(let i = 0; i < productCardFooterButtonName.length;i++){
        productCardFooterButtonName[i].classList.remove("d-none");
    }
});
