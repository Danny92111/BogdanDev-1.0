///////////////////////// Chez Lalee ////////////////

let getBtnMobileChez = document.querySelector("#Btn-View-Mobile-chez");
let getBtnIpadChez = document.querySelector("#Btn-View-Ipad-chez");

let getContMobileChez = document.querySelector("#Mobile-view-container-chez");
let getContIpadChez = document.querySelector("#Desktop-view-container-chez");

let getImgElementMobileChez = document.querySelector("#Mobile-view-container-chez img");
let getImgElementIpadChez = document.querySelector("#Desktop-view-container-chez img");


let isMobileFrameActive = true;

getBtnMobileChez.addEventListener("click", () => {
    if (isMobileFrameActive == false) {
        getContMobileChez.classList.remove("inactive-pop-up");
        getContMobileChez.classList.add("moveFromLeftToCenter");

        getContIpadChez.classList.add("inactive-pop-up");
        getContIpadChez.classList.remove("moveFromRightToCenter");
        isMobileFrameActive = true;

        getImgElementMobileChez.src = "videos/chez-mobile.gif";
        getImgElementIpadChez.src = "videos/static/chez-ipad.png";

        getBtnIpadChez.classList.remove("opacityNone");
        getBtnMobileChez.classList.add("opacityNone");
    }
})


getBtnIpadChez.addEventListener("click", () => {
    if (isMobileFrameActive == true) {
        getContMobileChez.classList.add("inactive-pop-up");
        getContMobileChez.classList.remove("moveFromLeftToCenter");
     
        getContIpadChez.classList.remove("inactive-pop-up");
        getContIpadChez.classList.add("moveFromRightToCenter");
        isMobileFrameActive = false;

        getImgElementMobileChez.src = "videos/static/chez-mobile.png";
        getImgElementIpadChez.src = "videos/chez-ipad.gif";
        
        getBtnIpadChez.classList.add("opacityNone");
        getBtnMobileChez.classList.remove("opacityNone");
    }
})


///////////////////////// Baseri ////////////////

let getBtnMobileBaseri = document.querySelector("#Btn-View-Mobile-baseri");
let getBtnIpadBaseri = document.querySelector("#Btn-View-Ipad-baseri");

let getContMobileBaseri = document.querySelector("#Mobile-view-container-baseri");
let getContIpadBaseri = document.querySelector("#Desktop-view-container-baseri");

let getImgElementMobileBaseri = document.querySelector("#Mobile-view-container-baseri img");
let getImgElementIpadBaseri = document.querySelector("#Desktop-view-container-baseri img");


let isMobileFrameActive2 = true;

getBtnMobileBaseri.addEventListener("click", () => {
    if (isMobileFrameActive2 == false) {
        getContMobileBaseri.classList.remove("inactive-pop-up");
        getContMobileBaseri.classList.add("moveFromLeftToCenter");

        getContIpadBaseri.classList.add("inactive-pop-up");
        getContIpadBaseri.classList.remove("moveFromRightToCenter");
        isMobileFrameActive2 = true;

        getImgElementMobileBaseri.src = "videos/baseri-mobileGIF.gif";
        getImgElementIpadBaseri.src = "videos/static/baseri-ipad.png";
        
        getBtnIpadBaseri.classList.remove("opacityNone");
        getBtnMobileBaseri.classList.add("opacityNone");
    }
})


getBtnIpadBaseri.addEventListener("click", () => {
    if (isMobileFrameActive2 == true) {
        console.log("safsaf")
        getContMobileBaseri.classList.add("inactive-pop-up");
        getContMobileBaseri.classList.remove("moveFromLeftToCenter");

        getContIpadBaseri.classList.remove("inactive-pop-up");
        getContIpadBaseri.classList.add("moveFromRightToCenter");
        isMobileFrameActive2 = false;

        getImgElementMobileBaseri.src = "videos/static/baseri-mobile.png";
        getImgElementIpadBaseri.src = "videos/baseri-ipad.gif";
        
        getBtnIpadBaseri.classList.add("opacityNone");
        getBtnMobileBaseri.classList.remove("opacityNone");
    }
})


///////////////////////// Oxford ////////////////

let getBtnMobileOxford = document.querySelector("#Btn-View-Mobile-oxford");
let getBtnIpadOxford = document.querySelector("#Btn-View-Ipad-oxford");

let getContMobileOxford = document.querySelector("#Mobile-view-container-oxford");
let getContIpadOxford = document.querySelector("#Desktop-view-container-oxford");

let getImgElementMobileOxford = document.querySelector("#Mobile-view-container-oxford img");
let getImgElementIpadOxford = document.querySelector("#Desktop-view-container-oxford img");


let isMobileFrameActive3 = true;

getBtnMobileOxford.addEventListener("click", () => {
    if (isMobileFrameActive3 == false) {
        getContMobileOxford.classList.remove("inactive-pop-up");
        getContMobileOxford.classList.add("moveFromLeftToCenter");

        getContIpadOxford.classList.add("inactive-pop-up");
        getContIpadOxford.classList.remove("moveFromRightToCenter");
        isMobileFrameActive3 = true;

        getImgElementMobileOxford.src = "videos/oxford-mobile.gif";
        getImgElementIpadOxford.src = "videos/static/oxford-ipad.png";

        getBtnIpadOxford.classList.remove("opacityNone");
        getBtnMobileOxford.classList.add("opacityNone");
    }
})


getBtnIpadOxford.addEventListener("click", () => {
    if (isMobileFrameActive3 == true) {
        getContMobileOxford.classList.add("inactive-pop-up");
        getContMobileOxford.classList.remove("moveFromLeftToCenter");

        getContIpadOxford.classList.remove("inactive-pop-up");
        getContIpadOxford.classList.add("moveFromRightToCenter");
        isMobileFrameActive3 = false;

        getImgElementMobileOxford.src = "videos/static/oxford-mobile.png";
        getImgElementIpadOxford.src = "videos/oxford-ipad.gif";

        getBtnIpadOxford.classList.add("opacityNone");
        getBtnMobileOxford.classList.remove("opacityNone");
    }
})