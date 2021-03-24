// Animation to SERVICES section


let getListOfCont = document.querySelectorAll(".eachService");
let getLearnMoreBtn = document.querySelector("#Learn-more-btn-services");
let ServicesExpanded = false;
let toggleBtn = true;
// get preview slides elements 
  let previewSlideService1 = document.querySelector("#Service1-Detailed");
  let previewSlideService2 = document.querySelector("#Service2-Detailed");
  let previewSlideService3 = document.querySelector("#Service3-Detailed");
  let previewSlideService4 = document.querySelector("#Service4-Detailed");

getLearnMoreBtn.addEventListener("click" , () => {
  // Get elements
  if (toggleBtn == true) {
  ServicesExpanded = true;
  
  let getService1Cont = document.querySelector("#Service1");
  let getService2Cont = document.querySelector("#Service2");
  let getService3Cont = document.querySelector("#Service3");
  let getService4Cont = document.querySelector("#Service4");
  let getService1Text = document.querySelector("#Service1 h2");
  let getService2Text = document.querySelector("#Service2 h2");
  let getService3Text = document.querySelector("#Service3 h2");
  let getService4Text = document.querySelector("#Service4 h2");
  
  

  //Add animation when clicking "Learn More"


  $(".Titles-Of-services").animate({opacity: "0"},1000);
  $("#Service1,#Service2,#Service3,#Service4,#Learn-more-btn-services").animate({opacity: "0"},1000,() => {$("#Service1,#Service2,#Service3,#Service4,#Learn-more-btn-services").animate({opacity: "1"},2000)});
 

  setTimeout(() => {
    // Text and Btn Fade
    getService1Text.classList.add("customFontSizeServicesNoText");
    getService2Text.classList.add("customFontSizeServicesNoText");
    getService3Text.classList.add("customFontSizeServicesNoText");
    getService4Text.classList.add("customFontSizeServicesNoText");
    //Service1
    $("#Service1").addClass("service1Animation");
    //Service2
    $("#Service2").addClass("service2Animation");
    //Service3
    $("#Service3").addClass("service3Animation");
    //Service4
    $("#Service4").addClass("service4Animation");

    // Move Button
    getLearnMoreBtn.style.top = "-74px";
    getLearnMoreBtn.style.left = window.innerWidth + "px";
    getLearnMoreBtn.style.transform="translateX(-120%)";
    getLearnMoreBtn.style.fontSize="0";
  },1200)
  
  setTimeout(() => {
    getLearnMoreBtn.classList.add("change-to-close-button");
    getLearnMoreBtn.innerText = "X";
    getLearnMoreBtn.style.fontSize="3rem";
  },1000)

  setTimeout(() => {
    getService1Cont.classList.add("on-active");
    previewSlideService1.style.left="0";
},2000)
toggleBtn = false;
}
})

//Add animation for preview slides

let getAllSlidesContainer = document.querySelectorAll(".detailedService");
let getActiveButtons = document.querySelectorAll(".make-slides-active");


getListOfCont.forEach((x) => {
  x.addEventListener("click", () => {
    if (ServicesExpanded == true) {
    if ((x.classList.contains("on-active")) == false) {
      getAllSlidesContainer.forEach((x) => {x.style.left = "-100%"});
      getListOfCont.forEach((b) => {b.classList.remove("on-active")});

      x.classList.add("on-active");
      x.getAttribute('id') == "Service1" ? previewSlideService1.style.left = "0" :
      x.getAttribute('id') == "Service2" ? previewSlideService2.style.left = "0" :
      x.getAttribute('id') == "Service3" ? previewSlideService3.style.left = "0" : previewSlideService4.style.left = "0"
    }
  }
  })
})



// add close animation

getLearnMoreBtn.addEventListener("click",() =>{
  let getService1Text = document.querySelector("#Service1 h2");
  let getService2Text = document.querySelector("#Service2 h2");
  let getService3Text = document.querySelector("#Service3 h2");
  let getService4Text = document.querySelector("#Service4 h2");

  // Get elements
  if (getLearnMoreBtn.innerText == "X") {
  console.log(toggleBtn);
  //////////////////////
  $("#Service1,#Service2,#Service3,#Service4,#Learn-more-btn-services").animate({opacity: "0"},1000,() => {$("#Service1,#Service2,#Service3,#Service4,#Learn-more-btn-services").animate({opacity: "1"},1500)});
  setTimeout(()=>{
  // Text and Btn Fade
  getService1Text.classList.remove("customFontSizeServicesNoText");
  getService2Text.classList.remove("customFontSizeServicesNoText");
  getService3Text.classList.remove("customFontSizeServicesNoText");
  getService4Text.classList.remove("customFontSizeServicesNoText");
  //Service1
  $("#Service1").removeClass("service1Animation");
  //Service2
  $("#Service2").removeClass("service2Animation");
  //Service3
  $("#Service3").removeClass("service3Animation");
  //Service4
  $("#Service4").removeClass("service4Animation");
  },3000)







  ////////////////////////////
  
  toggleBtn = true;
  ServicesExpanded = false;
  }
})


