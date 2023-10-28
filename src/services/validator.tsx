export class Validators {

    static isName(inputValue : string){
        const trimmedValue = inputValue.trim()
        const nameRegex =  new RegExp ("^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,}$")
        return nameRegex.test(trimmedValue)
    }

    static isBetween_0_and_99(inputValue : string){
        const trimmedValue = inputValue.trim()
        const numberRegex = new RegExp ("^[0-9]{1,2}$")
        return numberRegex.test(trimmedValue)
    }

    static isNumber(inputValue : string){
        return !Number.isNaN(Number.parseInt(inputValue))
    }

    static isDate(inputValue : string){
        const trimmedValue = inputValue.trim()
        const dateRegex = new RegExp("^[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}$")
        const isPastDate = (Date.parse(trimmedValue) - Date.now()) < 0
        return dateRegex.test(trimmedValue) && isPastDate
    }

    static isEmail(inputValue : string){
        const trimmedValue = inputValue.trim()
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return emailRegex.test(trimmedValue)
    }

    static isOneRadioChecked(radios : HTMLInputElement[]){
        for (const radio of radios) {
            if (radio.checked) {
                return true
            }
        }

        return false
    }

    static isBoxChecked(inputNode : HTMLInputElement){
        return inputNode.checked
    }
}