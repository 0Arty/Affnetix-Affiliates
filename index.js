const input = document.querySelector('#form_email_input')
const btn = document.querySelector('#form_email_btn')

console.log(input.value)
const message1 = document.querySelector('#message1')
const message2 = document.querySelector('#message2')

const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
let validation = false

const clearError = () => {
    input.style.border = ''
    message1.innerHTML = ''
    message2.innerHTML = ''
}

const validator = () => {
    const result = validatinEmail()
    message1.innerHTML = result.message
    message2.innerHTML = result.message
    validation = result.isValid
}

const submitHandler = (e) => {
    e.preventDefault();
    if (validation) {
        const email = document.emailForm.email.value
        alert(`email: ${email}`)
        input.value = ''
    }
   
}


btn.addEventListener('click', submitHandler)
input.addEventListener('focusout', validator)
input.addEventListener('focusin', clearError)


const validatinEmail = () => {

    const email = document.emailForm.email.value
    if (email === "") {
        input.style.border = '1px solid red'
        return {
            isValid: false,
            message: 'This field is required.'
        }
    } else if (!email_pattern.test(email)) {
        input.style.border = '1px solid red'
        return {
            isValid: false,
            message: 'Please enter a valid email address.'
        }
    }else{
        return {
            isValid: true,
            message: ''
        }
    }
    }
