console.log("Js file is attached.")
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const firstNameInput = document.getElementById("name");
const lastNameInput = document.getElementById("name");

const state = {
    email: "",
    password: "",  
}

emailInput.addEventListener("input", (e) => {
    console.log(e.target.value);
    state.email = e.target.value;
})

passwordInput.addEventListener("input", (e) => {
    state.password = e.target.value;
})