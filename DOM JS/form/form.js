const nameInput = document.createElement('input')
const emailInput = document.createElement('input')
const passwordInput = document.createElement('input')
const repeatPassword = document.createElement('input')
const button = document.createElement('button')
nameInput.setAttribute('id', 'nameInput')
nameInput.setAttribute('placeholder', 'Name')
emailInput.setAttribute('id', 'emailInput')
emailInput.setAttribute('placeholder', 'Email')
passwordInput.setAttribute('id', 'passwordInput')
passwordInput.setAttribute('placeholder', 'Password')
passwordInput.setAttribute('type', 'password')
repeatPassword.setAttribute('id', "repeatPassword")
repeatPassword.setAttribute('placeholder', "Repeat password")
repeatPassword.setAttribute('type', 'password')
button.setAttribute('id', 'submitButton')
button.innerHTML = 'Submit'
document.body.appendChild(nameInput)
document.body.appendChild(emailInput)
document.body.appendChild(passwordInput)
document.body.appendChild(repeatPassword)
document.body.appendChild(button)

const getFormElements = () => {
    const nameInput = document.getElementById("nameInput")
    const emailInput = document.getElementById("emailInput")
    const passwordInput = document.getElementById("passwordInput")
    const repeatPassword = document.getElementById("repeatPassword")
    return [nameInput, emailInput, passwordInput, repeatPassword]
}

const submitButton = document.getElementById("submitButton")
submitButton.addEventListener("click", () => {
    const [nameInput, emailInput, passwordInput] = getFormElements();
    const isNameValid = validateName(nameInput)
    const isPasswordValid = validatePassword(passwordInput, repeatPassword)
    const isEmailValid = validateEmail(emailInput)
    if (isNameValid && isPasswordValid && isEmailValid) {
        alert("Ура")
        console.log({ name: nameInput.value, email: emailInput.value, password: passwordInput.value })
    }
})

const validateName = (nameInput) => {
    if (nameInput.value.length < 8 || nameInput.value.legth > 24) {
        paintInvalid(nameInput)
        return false
    } else {
        paintValid(nameInput)
        return true
    }
}

const validateEmail = (emailInput) => {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (emailInput.value.length < 6 || !emailInput.value.toLowerCase().match(regEx)) {
        paintInvalid(emailInput)
        return false
    } else {
        paintValid(emailInput)
        return true
    }
}

const validatePassword = (passwordInput, repeatPassword) => {
    if (passwordInput.value.length < 16) {
        paintInvalid(passwordInput, repeatPassword)
        return false
    } else {
        if (passwordInput.value === repeatPassword.value) {
            paintValid(passwordInput, repeatPassword)
            return true
        } else {
            paintInvalid(passwordInput, repeatPassword)
            return false
        }
    }
}
const paintInvalid = (element, element2 = undefined) => {
    if (element2 != undefined) {
        element2.style.borderBottom = "0.1rem dashed red"
    }
    element.style.borderBottom = "0.1rem dashed red"
}
const paintValid = (element, element2 = undefined) => {
    if (element2 != undefined) {
        element2.style.borderBottom = "0.1rem solid #b2b2b2"
    }
    element.style.borderBottom = "0.1rem solid #b2b2b2"
}