let getForm = document.querySelector("#Contact-Form");


// add event listener on Submit
getForm.addEventListener("submit",(event) => {
    let getConfirmation = document.querySelector(".confirmation-message");
    let getConfirmationText = document.querySelector(".confirmation-message p");
    let getOKBtn = document.querySelector(".OK-Btn")

    // add same height to confirmation message as height of form
    getConfirmation.style.height = getForm.clientHeight / 1.7 + "px";
    console.log(getForm.clientHeight)

    
    
    
    addConfirmationMessage(getConfirmation,getConfirmationText,getOKBtn);


    // add event listener on OKbtn
    getOKBtn.addEventListener("click", () => {

    closeConfirmationMessage(getConfirmation, getConfirmationText, getOKBtn);

    })

    
})





// create functions to add in the event listener


let addConfirmationMessage = (MessageContainer, message, CloseBTN) => {
    let getMessengerPic = document.getElementById("My-pic-messenger");
    let dynamicArr = document.getElementById("Go-to-top-page-container");
    let validation = ((document.getElementById("getNameInput").value == "") || (document.getElementById("getEmailInput").value == "") || (document.getElementById("getMessageInput").value == ""));
    // add classes
    getMessengerPic.classList.add("inv-class");
    dynamicArr.classList.add("inv-class");

    
    CloseBTN.classList.add("OK-Btn-active");
    document.body.classList.add("stop-scrolling");


    // add if / else on message succesful or failure
    if (validation == true) {
        MessageContainer.classList.add("confirmation-message-active");
        event.preventDefault();
        MessageContainer.classList.add("confirmation-message-failure");
    setTimeout(() => {
        message.innerHTML = "Please fill out all the boxes";
    },500);
        
}
}



let closeConfirmationMessage = (MessageContainer, message, okBTN) => {
    let getMessengerPic = document.getElementById("My-pic-messenger");
    let dynamicArr = document.getElementById("Go-to-top-page-container");
    getMessengerPic.classList.remove("inv-class");
    dynamicArr.classList.remove("inv-class");


    MessageContainer.classList.remove("confirmation-message-active");
    okBTN.classList.remove("OK-Btn-active");
    document.body.classList.remove("stop-scrolling");
    message.innerHTML = "";
    
}