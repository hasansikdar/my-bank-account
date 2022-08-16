
document.getElementById("signup-button").addEventListener("click", function(event){
    // step 1 get email input value
    let email = document.getElementById("email");
    let emailvalue = email.value;
    console.log(emailvalue);
    email.value = "";

    // step 2 get password input value
    let password = document.getElementById("password");
    let passwordvalue = password.value;
    console.log(passwordvalue);
    password.value = "";
    // step 3 get varify email and password
    if(emailvalue === "bankaccount@gmail.com" && passwordvalue === "secret"){
        document.location.href = "http://127.0.0.1:5500/account/account.html";

    }
    else {
        alert("invalid password");
    }
    event.stopPropagation;
});


// get depositbutton 

