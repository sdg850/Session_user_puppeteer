const validateValue = (inputName) => {
    return {
        isEmpty: function (inputValue) {
            if (inputValue == ""
                || inputValue == null
                || inputValue == undefined) {

                return true;

            }

            return false
        },
        message: function () {
            return `${inputName} must be required`
        }
    }
}

const showMessage = (e, messages, elementMessage) => {
    elementMessage.innerText = messages.join('\n')
    e.preventDefault()

}


export { validateValue, showMessage };