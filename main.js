// fixed navbar || pagescroll btn
let mobileFixedNavbar = document.querySelector(".mobile-header");
let mainFixedNavbar = document.getElementById("fixed-navbar");

let bnFircaImage = document.querySelector(".bn-firca-image");
let fixedNavbarItems = document.getElementById("fixed-navbar-items");

let body = document.querySelector("body");
let pageUpScrollBtn = document.getElementById("page-up-scroll-btn");
body.onscroll = function(){
    if(scrollY > 220){
        mobileFixedNavbar.classList.add("fixed-top");
        mobileFixedNavbar.style.boxShadow = "0 0 5px rgba(0,0,0,0.4)";
        mainFixedNavbar.classList.add("fixed-top");
        mainFixedNavbar.style.boxShadow = "0 0 5px rgba(0,0,0,0.4)";
        bnFircaImage.classList.add("d-none");
        fixedNavbarItems.classList.remove("d-none");
        fixedNavbarItems.classList.add("d-flex");
    }else{
        mobileFixedNavbar.classList.remove("fixed-top");
        mobileFixedNavbar.style.boxShadow = "none";
        mainFixedNavbar.classList.remove("fixed-top");
        mainFixedNavbar.style.boxShadow = "none";
        bnFircaImage.classList.remove("d-none");
        fixedNavbarItems.classList.remove("d-flex");
        fixedNavbarItems.classList.add("d-none");
    }
    if(scrollY > 400){
        pageUpScrollBtn.classList.add("show");
    }else{
        pageUpScrollBtn.classList.remove("show");
    }
}

pageUpScrollBtn.onclick = function(){
    window.scrollTo(0,0);
}



// offcanvas category btns
let altPanelBtn = document.querySelectorAll(".alt-panel-button");
let altPanelBtnIcons = document.querySelectorAll(".alt-panel-button i")
let altCategoryPanel = document.querySelectorAll(".category-alt-panel");

for(let i = 0; i < altPanelBtn.length; i++){
    (function(index){
        altPanelBtn[i].addEventListener("click",function(){
            
            if(altCategoryPanel[index].classList.contains("d-none")==true){
                altCategoryPanel[index].classList.remove("d-none");
                altPanelBtnIcons[index].classList.remove("rotate-right-arrow-90");
                altPanelBtnIcons[index].classList.add("rotate-down-arrow-90");
            }else{
                altCategoryPanel[index].classList.add("d-none");
                altPanelBtnIcons[index].classList.remove("rotate-down-arrow-90");
                altPanelBtnIcons[index].classList.add("rotate-right-arrow-90");
            }
        })
    })(i);
}





// top navbar link open alt panels
let topNavLink = document.querySelectorAll(".top-nav-link");
let topNavAltPanel = document.querySelectorAll(".top-nav-alt-panel");
topNavLink[0].addEventListener("mouseover",function(){
    topNavAltPanel[0].classList.remove("d-none");
})
topNavLink[0].addEventListener("mouseout",function(){
    topNavAltPanel[0].classList.add("d-none");
})
topNavLink[1].addEventListener("mouseover",function(){
    topNavAltPanel[1].classList.remove("d-none");
})
topNavLink[1].addEventListener("mouseout",function(){
    topNavAltPanel[1].classList.add("d-none");
})

//bottom nav category buttons
let bottomNavCategoryBtn = document.querySelectorAll(".bn-category-btn");
let bottomNavCategoryAltPanel = document.querySelectorAll(".bn-category-alt-panel");

for(let i = 0; i < bottomNavCategoryBtn.length;i++){
    (function(index){
        bottomNavCategoryBtn[i].addEventListener("mouseover",function(){
            bottomNavCategoryAltPanel[index].classList.remove("d-none");
        })
        bottomNavCategoryBtn[i].addEventListener("mouseout",function(){
            bottomNavCategoryAltPanel[index].classList.add("d-none");
        })
    })(i);
}


//bottom nav alt panel link btn
let altPanelLinkBtn = document.querySelectorAll(".alt-panel-link-btn");
let altPanelLinkPanel = document.querySelectorAll(".alt-panel-link-panel");
let altPanelLinkBtnIcons = document.querySelectorAll(".alt-panel-link-btn i");

for(let i = 0; i < altPanelLinkBtn.length;i++){
    (function(index){
        altPanelLinkBtn[i].addEventListener("click",function(){
            
            if(altPanelLinkPanel[index].classList.contains("d-none")==true){
                for(let i = 0; i < altPanelLinkPanel.length;i++){
                    altPanelLinkPanel[i].classList.add("d-none");
                    altPanelLinkBtnIcons[i].classList.remove("rotate-down-arrow-90");
                    altPanelLinkBtnIcons[i].classList.add("rotate-right-arrow-90");
                }
                altPanelLinkPanel[index].classList.remove("d-none");
                altPanelLinkBtnIcons[index].classList.remove("rotate-right-arrow-90");
                altPanelLinkBtnIcons[index].classList.add("rotate-down-arrow-90");
            }else{
                altPanelLinkPanel[index].classList.add("d-none");
                altPanelLinkBtnIcons[index].classList.remove("rotate-down-arrow-90");
                altPanelLinkBtnIcons[index].classList.add("rotate-right-arrow-90");
            }
        })
    })(i);
}




// mobile language btn
let langDiv = document.querySelector(".lang-div");
let langHiddenDiv = document.querySelector(".lang-hidden-div");
let langDivArrow = document.querySelector(".lang-div .fa-chevron-down");

langDiv.addEventListener("click",function(){
    if(langHiddenDiv.classList.contains("d-none")==true){
        langHiddenDiv.classList.remove("d-none");
        langDivArrow.classList.remove("rotate-down-arrow-180");
        langDivArrow.classList.add("rotate-up-arrow-180");
    }else{
        langHiddenDiv.classList.add("d-none");
        langDivArrow.classList.remove("rotate-up-arrow-180");
        langDivArrow.classList.add("rotate-down-arrow-180");
    }
});

// top navbar language btn
let tnrLangDiv = document.querySelector(".tnr-lang-div");
let tnrHiddenLangDiv = document.querySelector(".tnr-lang-hidden-div");
let tnrHiddenDivIcon = document.querySelector(".tnr-lang-div .fa-chevron-down");

tnrLangDiv.addEventListener("mouseover",function(){
    tnrHiddenLangDiv.classList.remove("d-none");
    tnrHiddenDivIcon.classList.remove("rotate-down-arrow-180");
    tnrHiddenDivIcon.classList.add("rotate-up-arrow-180");
})
tnrLangDiv.addEventListener("mouseout",function(){
    tnrHiddenLangDiv.classList.add("d-none");
    tnrHiddenDivIcon.classList.remove("rotate-up-arrow-180");
    tnrHiddenDivIcon.classList.add("rotate-down-arrow-180");
})
//fixed navbar language btn
let fixLangDiv = document.querySelector(".fix-lang-div");
let fixHiddenLangDiv = document.querySelector(".fix-lang-hidden-div");
let fixHiddenDivIcon = document.querySelector(".fix-lang-div .fa-chevron-down");

fixLangDiv.addEventListener("mouseover",function(){
    fixHiddenLangDiv.classList.remove("d-none");
    fixHiddenDivIcon.classList.remove("rotate-down-arrow-180");
    fixHiddenDivIcon.classList.add("rotate-up-arrow-180");
})
fixLangDiv.addEventListener("mouseout",function(){
    fixHiddenLangDiv.classList.add("d-none");
    fixHiddenDivIcon.classList.remove("rotate-up-arrow-180");
    fixHiddenDivIcon.classList.add("rotate-down-arrow-180");
})







// shadow hover effect
let hoverEffect = document.querySelectorAll(".hover-effect");
for(let i = 0; i < hoverEffect.length;i++){
    (function(index){
        hoverEffect[i].addEventListener("mouseover",function(){
            hoverEffect[index].classList.add("shadow-effect-red");
        });
        hoverEffect[i].addEventListener("mouseout",function(){
            hoverEffect[index].classList.remove("shadow-effect-red");
        })
    })(i);
}

let hoverEffect2 = document.querySelectorAll(".hover-effect-2");
for(let i = 0; i < hoverEffect2.length;i++){
    (function(index){
        hoverEffect2[i].addEventListener("mouseover",function(){
            hoverEffect2[index].classList.add("shadow-effect-white");
        });
        hoverEffect2[i].addEventListener("mouseout",function(){
            hoverEffect2[index].classList.remove("shadow-effect-white");
        })
    })(i);
}
let hoverEffectGreen = document.querySelectorAll(".hover-effect-green");
for(let i = 0; i < hoverEffectGreen.length;i++){
    (function(index){
        hoverEffectGreen[i].addEventListener("mouseover",function(){
            hoverEffectGreen[index].classList.add("shadow-effect-green");
        });
        hoverEffectGreen[i].addEventListener("mouseout",function(){
            hoverEffectGreen[index].classList.remove("shadow-effect-green");
        })
    })(i);
}




// page cards buttons (sebet,secilmis,muqayise)
let pageCardItems = document.querySelectorAll(".main-page-cards .card-items .card-item");
for(let i = 0; i < pageCardItems.length;i++){
    (function(index){
        pageCardItems[i].addEventListener("mouseover",function(){
            pageCardItems[index].classList.add("show-page-card-item");
        });
        pageCardItems[i].addEventListener("mouseout",function(){
            pageCardItems[index].classList.remove("show-page-card-item");
        });
    })(i);
}



// search button
let searchButton = document.querySelectorAll(".search-button");
let searchInput = document.querySelectorAll(".search-input");

for(let i = 0; i < searchButton.length;i++){
    (function(index){
        searchButton[i].addEventListener("click",function(){
            if(searchInput[index].classList.contains("d-none")==true){
                searchInput[index].classList.remove("d-none");
            }else{
                searchInput[index].classList.add("d-none");
            }
        })
    })(i);
}


let catalogColorButtons = document.querySelectorAll(".catalog-color-button");
let colorAltPanel = document.querySelectorAll(".color-alt-panel");

for(let i = 0; i < catalogColorButtons.length; i++){
    (function(index){
        catalogColorButtons[i].addEventListener("click",function(){
            
            if(colorAltPanel[index].classList.contains("d-none")==true){
                for(let i = 0; i < colorAltPanel.length;i++){
                    colorAltPanel[i].classList.add("d-none");
                }
                colorAltPanel[index].classList.remove("d-none");
            }else{
                colorAltPanel[index].classList.add("d-none");
            }
        })
    })(i);
}




// mehusllar sehifesi


let productCatalogItem = document.querySelectorAll(".catalog-mobile .catalog-item");
let catalogItemChevron = document.querySelectorAll(".catalog-mobile .catalog-item .chevron");
for(let i = 0; i < productCatalogItem.length; i++){
    (function(index){
        productCatalogItem[i].addEventListener("click",function(){
            if(productCatalogItem[index].classList.contains("status-open")==false){
                productCatalogItem[index].classList.add("status-open");
                catalogItemChevron[index].classList.remove("rotate-right-arrow-90");
                catalogItemChevron[index].classList.add("rotate-down-arrow-90");
            }else{
                productCatalogItem[index].classList.remove("status-open");
                catalogItemChevron[index].classList.remove("rotate-down-arrow-90");
                catalogItemChevron[index].classList.add("rotate-right-arrow-90");
            }
        })
    })(i);
}

let mainCatalogBtn1 = document.querySelectorAll(".catalog-main .main-catalog-btn-1");
let catalogRightPanel1 = document.querySelectorAll(".catalog-main .catalog-right-panel-1");
let mainCatalogBtn2 = document.querySelectorAll(".catalog-main .main-catalog-btn-2");
let catalogRightPanel2 = document.querySelectorAll(".catalog-main .catalog-right-panel-2");



for(let i = 0; i < mainCatalogBtn1.length; i++){
    (function(index){
        mainCatalogBtn1[i].addEventListener("mouseenter",function(){
            catalogRightPanel1[index].classList.remove("d-none");
        })
        mainCatalogBtn1[i].addEventListener("mouseleave",function(){
            catalogRightPanel1[index].classList.add("d-none");
        })
    })(i);
}

for(let i = 0; i < mainCatalogBtn2.length; i++){
    (function(index){
        mainCatalogBtn2[i].addEventListener("mouseenter",function(){
            catalogRightPanel2[index].classList.remove("d-none");
        })
        mainCatalogBtn2[i].addEventListener("mouseleave",function(){
            catalogRightPanel2[index].classList.add("d-none");
        })
    })(i);
}


let filterPanel = document.querySelectorAll(".filters-wrapper .filter-panel");
let filterPanelChevron = document.querySelectorAll(".filters-wrapper .filter-panel .chevron i");
for(let i = 0; i < filterPanel.length;i++){
    (function(index){
        filterPanel[i].addEventListener("click",function(){
            if(filterPanel[index].classList.contains("status-close")==false){
                filterPanel[index].classList.add("status-close");
                filterPanelChevron[index].classList.remove("chevron-rotate-up");
                filterPanelChevron[index].classList.add("chevron-rotate-down");
            }else{
                filterPanel[index].classList.remove("status-close");
                filterPanelChevron[index].classList.remove("chevron-rotate-down");
                filterPanelChevron[index].classList.add("chevron-rotate-up");
            }
        })
    })(i);
}


// Range Input
const rangeInput = document.querySelectorAll(".range-input input");
const priceInput = document.querySelectorAll(".price-input input");
const progress = document.querySelector(".slider .progress");

let priceGap = 20;
priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(priceInput[0].value);
    let maxVal = parseInt(priceInput[1].value);

    if (maxVal - minVal >= priceGap && maxVal <= 200) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minVal;
        progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxVal;
        progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value);
    let maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});



// filter button
let filterButtons = document.querySelectorAll(".filters-wrapper .filter-button");
for(let i = 0; i < filterButtons.length; i++){
    (function(index){
        filterButtons[i].addEventListener("click",function(){
            filterButtons[index].classList.toggle("active-filter-button")
        })
    })(i);
}









// sebet button
let sebetButton = document.querySelectorAll(".sebet-btn");
let sebetCounterSpan = document.querySelector(".sebet-counter");
let sebetCounterValue = parseInt(document.querySelector(".sebet-counter").innerHTML);

for(let i = 0; i < sebetButton.length; i++){
    (function(index){
        sebetButton[i].addEventListener("click",function(){
            if(sebetButton[index].classList.contains("active-sebet-btn") == false){
                sebetButton[index].classList.add("active-sebet-btn");
                sebetCounterValue += 1;
                sebetCounterSpan.innerHTML = sebetCounterValue;
            }else{
                sebetButton[index].classList.remove("active-sebet-btn");
                sebetCounterValue -= 1;
                sebetCounterSpan.innerHTML = sebetCounterValue;
            }
        })
    })(i);
}



// muqayise button
let muqayiseButton = document.querySelectorAll(".muqayise-btn");
let muqayiseCounterSpan = document.querySelector(".muqayise-counter");
let muqayiseCounterValue = parseInt(document.querySelector(".muqayise-counter").innerHTML);

for(let i = 0; i < muqayiseButton.length; i++){
    (function(index){
        muqayiseButton[i].addEventListener("click",function(){
            if(muqayiseButton[index].classList.contains("active-muqayise-btn") == false){
                muqayiseButton[index].classList.add("active-muqayise-btn");
                muqayiseCounterValue += 1;
                muqayiseCounterSpan.innerHTML = muqayiseCounterValue;
            }else{
                muqayiseButton[index].classList.remove("active-muqayise-btn");
                muqayiseCounterValue -= 1;
                muqayiseCounterSpan.innerHTML = muqayiseCounterValue;
            }
        })
    })(i);
}

// Like button 
let favoriteButton = document.querySelectorAll(".favorite-btn");
let disslikeICon = document.querySelectorAll(".favorite-btn .disslike");
let likeICon = document.querySelectorAll(".favorite-btn .like");

let favoriteCounterSpan = document.querySelector(".favorite-counter");
let favoriteCounterValue = parseInt(document.querySelector(".favorite-counter").innerHTML);

for(let i = 0; i < favoriteButton.length; i++){
    (function(index){
        favoriteButton[i].addEventListener("click",function(){
            if(likeICon[index].classList.contains("d-none")==true){
                disslikeICon[index].classList.add("d-none");
                likeICon[index].classList.remove("d-none");
                favoriteCounterValue += 1;
                favoriteCounterSpan.innerHTML = favoriteCounterValue;
            }else{
                likeICon[index].classList.add("d-none");
                disslikeICon[index].classList.remove("d-none");
                favoriteCounterValue -= 1;
                favoriteCounterSpan.innerHTML = favoriteCounterValue;
            }
        })
    })(i);
}















