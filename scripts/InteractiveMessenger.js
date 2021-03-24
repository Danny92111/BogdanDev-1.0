// Interactive social icons
const socialOn = () => {
  let getSocialCont = document.querySelector("#Social-media-container");
  let getSocialContSmall = document.querySelector(
    "#Social-media-small-container"
  );
  let getSocialContImg = document.querySelectorAll(
    "#Social-media-small-container img"
  );
  let getBody = document.querySelector("body");
  let getMessengerIcon = document.querySelector("#My-pic-messenger");
  let getMainContainerMessenger = document.querySelector(
    "#Contact-me-messenger-wrapper"
  );

  getMainContainerMessenger.style.bottom = "0";
  getMessengerIcon.style.right = `${getSocialContSmall.offsetWidth}px`;
  getSocialCont.style.right = "0";
  getSocialContSmall.style.opacity = "1";
  getBody.classList.add("stop-scrolling-dark-mode");
  getMessengerIcon.classList.add("change-icon-messenger");
};

const socialOff = () => {
  let getSocialCont = document.querySelector("#Social-media-container");
  let getSocialContSmall = document.querySelector(
    "#Social-media-small-container"
  );
  let getSocialContImg = document.querySelectorAll(
    "#Social-media-small-container img"
  );
  let getBody = document.querySelector("body");
  let getMessengerIcon = document.querySelector("#My-pic-messenger");
  let getMainContainerMessenger = document.querySelector(
    "#Contact-me-messenger-wrapper"
  );

  getMessengerIcon.style.right = `0`;
  getSocialCont.style.right = "-110%";
  getSocialContSmall.style.opacity = "0";
  getMainContainerMessenger.style.bottom = "-15%";
  getMessengerIcon.classList.remove("change-icon-messenger");
  getBody.classList.remove("stop-scrolling-dark-mode");
};

//--- 1st Popup
let messengerIsVisible = false;
$("#My-pic-messenger").click(function () {
  if (messengerIsVisible == false) {
    $("#Content-messenger-wrapper").css("left", "0");
    messengerIsVisible = true;
    getButtonContainer.style.display = "none";
    socialOn();
  } else if (messengerIsVisible == true) {
    $("#Content-messenger-wrapper").css("left", "-100%");
    $("#Answer-req-email-cont").css("bottom", "-100%");
    messengerIsVisible = false;
    getButtonContainer.style.display = "block";
    socialOff();
  }
});

//--- 2nd Popup

$("#Go-to-2nd-Popup").click(function () {
  $("#Answer-req-email-cont").css("transition", "bottom 2s");
  $("#Content-messenger-wrapper").css("left", "-100%");
  $("#Answer-req-email-cont").css("bottom", "0");
});
//--- 3rd Popup
$("#Go-to-3rd-Popup").click(function () {
  // Zoom to normal
  function zoomOutMobile() {
    var viewport = document.querySelector('meta[name="viewport"]');

    if (viewport) {
      viewport.content = "initial-scale=1";
    }
  }

  zoomOutMobile();
  //
  $("#Thank-you-cont").css("z-index", "999");
  $("#Thank-you-cont").css("opacity", "1");
  socialOff();
  setTimeout(() => {
    $("#Thank-you-cont").css("opacity", "0");
    $("#Thank-you-cont").css("z-index", "-1");
    $("#Answer-req-email-cont").css("transition", "none");
    $("#Answer-req-email-cont").css("bottom", "-100%");
    messengerIsVisible = false;
    getButtonContainer.style.display = "block";
  }, 1500);
});
