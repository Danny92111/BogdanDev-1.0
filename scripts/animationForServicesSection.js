// Animation to SERVICES section


let getListOfCont = document.querySelectorAll(".eachService");
let getLearnMoreBtn = document.querySelector("#Learn-more-btn-services");
let ServicesExpanded = false;
let animationStarted = false;

// add first animation


$("#Learn-more-btn-services").click(() => {
    if (animationStarted == false) {
        console.log("animationStarted");
    $(".Titles-Of-services").animate({opacity: "0"},1000,() => { $(".Titles-Of-services").css("display" , "none")});
    $("#Service1,#Service2,#Service3,#Service4,#Learn-more-btn-services").animate({opacity: "0"},1000,() => {
        
        //Service1
        $("#Service1").addClass("service1Animation");
        //Service2
        $("#Service2").addClass("service2Animation");
        //Service3
        $("#Service3").addClass("service3Animation");
        //Service4
        $("#Service4").addClass("service4Animation");
        // Learn more BTN
        $("#Learn-more-btn-services").addClass("BTNafteranimation");
        $("#Learn-more-btn-services").text("X");
        
        $("#Service1,#Service2,#Service3,#Service4,#Learn-more-btn-services").animate({opacity: "1"},1000)
    });
    setTimeout(() => {
        $("#Service1").addClass("on-active"); 
        $("#Service1-Detailed").addClass("activeSlide"); 
        console.log("asfasfsf")
    },2000)
    
    let getArrayOfServices = document.querySelectorAll(".eachService");
    let getDynamicSlides = document.querySelectorAll(".detailedService");
    getArrayOfServices.forEach((x) => {
        x.addEventListener("click", () => {
            if ((((x.classList.contains("on-active")) == false)) && (animationStarted == true)) {
                getArrayOfServices.forEach((x) => { x.classList.remove("on-active");})
                x.classList.add("on-active"); 
                getDynamicSlides.forEach((x) => { x.classList.remove("activeSlide");})
                x.id == "Service1" ? $("#Service1-Detailed").addClass("activeSlide") :
                x.id == "Service2" ? $("#Service2-Detailed").addClass("activeSlide") :
                x.id == "Service3" ? $("#Service3-Detailed").addClass("activeSlide") : $("#Service4-Detailed").addClass("activeSlide")
            }
            
        })
    })
    animationStarted = true;
}
// add closing animation
else if (animationStarted == true)  {
    $("#cont-remove-anim").addClass("contForClosingAnim")
    $("#Service1,#Service2,#Service3,#Service4,#Learn-more-btn-services,.detailedService").addClass("transitionNone");
    $("#cont-remove-anim").animate({opacity: "1"},1000, () => {
        let getArrayOfServices = document.querySelectorAll(".eachService");
        let getDynamicSlides = document.querySelectorAll(".detailedService");
        getArrayOfServices.forEach((x) => { x.classList.remove("on-active");})
        getDynamicSlides.forEach((x) => { x.classList.remove("activeSlide");})
        $(".Titles-Of-services").css({"display":"block","opacity":"1"});
        //Service1
        $("#Service1").removeClass("service1Animation");
        //Service2
        $("#Service2").removeClass("service2Animation");
        //Service3
        $("#Service3").removeClass("service3Animation");
        //Service4
        $("#Service4").removeClass("service4Animation");
        // Learn more BTN
        $("#Learn-more-btn-services").removeClass("BTNafteranimation");
        $("#Learn-more-btn-services").text("Learn more");
        //text
        $(".Titles-Of-services").css("display","block");
        $("#cont-remove-anim").animate({opacity: "0"},1000, ()=> {
            $("#cont-remove-anim").removeClass("contForClosingAnim");
            $("#Service1,#Service2,#Service3,#Service4,#Learn-more-btn-services,.detailedService").removeClass("transitionNone");
        });
    })
    animationStarted = false;
}
})

// add closing animation

