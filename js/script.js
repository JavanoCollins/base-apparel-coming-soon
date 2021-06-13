const input = document.querySelector(".input-field");
const button = document.querySelector("button");
const errorMessage = document.getElementById("error-message");
const errorIcon = document.getElementById("error-icon");

// errorMessage.addEventListener("mouseover", () => {
//     alert("Hello World!");
// });

button.addEventListener("click", () => {
    let email = input.value;
    if (!validateEmail(email)) {
        input.style.border = "1px solid red"
        errorIcon.style.display = "block";
        errorMessage.style.display = "block";
    } else {
        // input.style.border = "none";
        errorIcon.style.display = "none";
        errorMessage.style.display = "none";
    }
    console.log(email);
});

function validateEmail(email) {
    const re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
