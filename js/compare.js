let productList = document.querySelectorAll(".lists-wrapper.product");
let removeButton = document.querySelectorAll(".lists-wrapper.product .remove-button");

for(let i = 0; i < removeButton.length;i++){
    (function(index){
        removeButton[i].addEventListener("click",function(){
            productList[index].classList.add("d-none")
        })
    })(i);
}

// BASKET BUTTON
let basketButton = document.querySelectorAll(".product-button.basket");
let enabledBasketButton = document.querySelectorAll(".product-button.basket .enabled");
let disabledBasketButton = document.querySelectorAll(".product-button.basket .disabled");

let basketCounterSpan = document.querySelector(".toolbar-card .basket-counter");
let basketCounterValue = parseInt(basketCounterSpan.innerHTML);

for(let i = 0; i < basketButton.length; i++){
    (function(index){
        basketButton[i].addEventListener("click",function(){
            if(enabledBasketButton[index].classList.contains("d-none")==true){
                disabledBasketButton[index].classList.add("d-none");
                enabledBasketButton[index].classList.remove("d-none");
                basketButton[index].classList.add("active");

                basketCounterValue += 1;
                basketCounterSpan.innerHTML = basketCounterValue;
            }else{
                enabledBasketButton[index].classList.add("d-none");
                basketButton[index].classList.remove("active");
                disabledBasketButton[index].classList.remove("d-none");

                basketCounterValue -= 1;
                basketCounterSpan.innerHTML = basketCounterValue;
            }
        })
    })(i);
};