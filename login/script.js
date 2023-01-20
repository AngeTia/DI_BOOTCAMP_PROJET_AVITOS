// F
getSubmitForm = () => {
    console.log("Form submitted! Username and password saved to local storage.");
    let getEmail = document.getElementById("email").value;
    let getPassword = document.getElementById("password").value;
    
    let emailInput = localStorage.setItem("uie",getEmail);
    let passwordInput = localStorage.setItem("uiepassword",getPassword);
    
    let stockPassword = localStorage.getItem(passwordInput);
    console.log(stockPassword);
    let stockEmail = localStorage.getItem(emailInput)
    console.log(stockEmail);
}
getSubmitForm