function passwordToggle (passwordInput, hide1, hide2) {

    passwordInput = document.getElementById("passwordInput");
    hide1 = document.getElementById("hide1");
    hide2 = document.getElementById("hide2");

    if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
    } else { 
            passwordInput.type = 'password';
    }
}