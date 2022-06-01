const getFormElements = () => {
    const nameInput = document.getElementById("nameInput")
    const emailInput = document.getElementById("emailInput")
    const passwordInput = document.getElementById("passwordInput")
    return [nameInput, emailInput, passwordInput]
}

const submitButton = document.getElementById("submitButton")
submitButton.addEventListener("click", () => {
    const [nameInput, emailInput, passwordInput] = getFormElements();
    const isNameValid = validateName(nameInput)
    const isPasswordValid = validatePassword(passwordInput)
    const isEmailValid = validateEmail(emailInput)
    if (isNameValid && isPasswordValid && isEmailValid) {
        alert("Ура")
        console.log({ name: nameInput.value, email: emailInput.value, password: passwordInput.value })
    }
})

const validateName = (nameInput) => {
    if (nameInput.value.length < 8 || nameInput.value.legth > 24) {
        nameInput.style.borderBottom = "0.1rem dashed red"
        return false
    } else {
        nameInput.style.borderBottom = "0.1rem solid #b2b2b2"
        return true
    }
}

const validateEmail = (emailInput) => {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (emailInput.value.length < 6 || !emailInput.value.toLowerCase().match(regEx)) {
        emailInput.style.borderBottom = "0.1rem dashed red"
        return false
    } else {
        emailInput.style.borderBottom = "0.1rem solid #b2b2b2"
        return true
    }
}

const validatePassword = (passwordInput) => {
    if (passwordInput.value.length < 16) {
        passwordInput.style.borderBottom = "0.1rem dashed red"
        return false
    } else {
        passwordInput.style.borderBottom = "0.1rem solid #b2b2b2"
        return true
    }
}
