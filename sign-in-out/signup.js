const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confrimPasswordInput = document.getElementById("confirmPassword");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const signupButton = document.getElementById("sign-up");
const signupForm = document.getElementById("form");


const signUpState = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: ""
}

emailInput.addEventListener("input", (e) => {
    signUpState.email = e.target.value;
})

passwordInput.addEventListener("input", (e) => {
    signUpState.password = e.target.value;
})

firstNameInput.addEventListener("input", (e) => {
    signUpState.firstName = e.target.value;
})

lastNameInput.addEventListener("input", (e) => {
    signUpState.lastName = e.target.value;
})

confrimPasswordInput.addEventListener("input", (e) => {
    signUpState.confirmPassword = e.target.value;
})

function handleSingupClick(event) {
    event.preventDefault();
    console.log("handle form is called.")
    if (signUpState.password === signUpState.confirmPassword) {
        localStorage.setItem("signupData", JSON.stringify(signUpState));
        window.location = "login.html"
    } else {
        alert("Password does not match. Please try again.")
    }
}

signupForm.addEventListener("submit", handleSingupClick)