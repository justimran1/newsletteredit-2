
//optional :real time error update as the user types
var emailvalue = localStorage.getItem("userEmail");
var output =document.querySelector("#user-input")
if (emailvalue){
    output.textContent =`${emailvalue}`;
}else{
    output.textContent ="";
};