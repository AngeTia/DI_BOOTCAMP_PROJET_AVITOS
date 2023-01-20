// Function get all form information
getSubmitForm = () => {
    console.log("Form submitted! Username and password saved to local storage.");
    let getEmail = document.getElementById("email").value;
    let getPassword = document.getElementById("password").value;
    
    let emailInput = localStorage.setItem("email",getEmail);
    let passwordInput = localStorage.setItem("password",getPassword);
    
    let stockPassword = localStorage.getItem(passwordInput);
    console.log(stockPassword);
    let stockEmail = localStorage.getItem(emailInput)
    console.log(stockEmail);
}
getSubmitForm