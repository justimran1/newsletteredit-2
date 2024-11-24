

var redborder = document.querySelector("#email-frm");
var error = document.querySelector(".email-error");
var emailInput =document.querySelector(".place-holder");

var button1 = document.querySelector(".button");

//add event listner to button
button1.addEventListener("click", function(event){
var emailvalue = emailInput.value.trim();
//  validate the email input
if (!validateEmail(emailvalue)) {
event.preventDefault(); //prevent

//to show error message
error.style.display ="inline-block"; 
//add red border and red background

emailInput.style.borderColor ="red";
emailInput.style.backgroundColor ="hsl(4, 100%, 67%)";
emailInput.style.opacity ="80%";
//clear previous email output if the new one is invalid
output.textContent = "";

}

else{
    //if the email is valid clear the red border and the text
    emailInput.classList.remove("#input-email") 
    error.style.display ="none";
    localStorage.setItem("userEmail", emailvalue)
window.location.href ="newsletter-sign-up-with-success-message-main/2index.html";
}
});



    function validateEmail(email){
        //simple regex for email  validation.
        const emailPattern =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
