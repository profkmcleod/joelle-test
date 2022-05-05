// set variables

const form = document.getElementById("contactform");
const username = document.getElementById("username");
const email = document.getElementById("email");
const message = document.getElementById("message");

// on submit
form.addEventListener("submit", (e) => {
    
    // prevent form submission
    e.preventDefault();

    checkValues();

    if((email.value !== "") && (message.value !== "")) {
        form.submit();
        console.log("Form Submitted!");
        alert("Thank you! We'll get back to you ASAP!");
    } 
   
});

function checkValues() {
    let emailValue = email.value;
    let messageValue = message.value;
}