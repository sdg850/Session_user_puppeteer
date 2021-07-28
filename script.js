import { validateValue, showMessage } from './util.js'

const Name = document.getElementById("name")
const password = document.getElementById("password")
const form = document.getElementById("form")
const elementMessage = document.getElementById("messages")


function init() {
    form.addEventListener('submit', (e) => {

        let messages = []

        const inputName = validateValue("Name")
        const inputPassword = validateValue("Password")

        if (inputName.isEmpty(Name.value) == true) {
            messages.push(inputName.message())

        }

        if (inputPassword.isEmpty(password.value) == true) {
            messages.push(inputPassword.message())

        }

        if (messages.length > 0) {
            showMessage(e, messages, elementMessage)
        }






    })


}

init()