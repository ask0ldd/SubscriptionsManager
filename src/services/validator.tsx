export class Validators {

    static isName(inputValue : string) : boolean{
        const trimmedValue = inputValue.trim()
        const nameRegex =  new RegExp ("^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,}$")
        return nameRegex.test(trimmedValue)
    }

    static isBetween_0_and_99(inputValue : string) : boolean{
        const trimmedValue = inputValue.trim()
        const numberRegex = new RegExp ("^[0-9]{1,2}$")
        return numberRegex.test(trimmedValue)
    }

    /*static isNumber(inputValue : string) : boolean{
        return !Number.isNaN(Number.parseInt(inputValue))
    }

    static isPositiveNumber(inputValue : string) : boolean{
        return !Number.isNaN(Number.parseInt(inputValue)) && Number.parseInt(inputValue) > 0
    }*/

    // !!! past date & future date needed
    /*static isDate(inputValue : string) : boolean{
        const trimmedValue = inputValue.trim()
        const dateRegexDash = new RegExp("^[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}$")
        const dateRegexSlash = new RegExp("^[0-9]{1,2}/[0-9]{1,2}/[0-9]{4}$")
        //!! ispastdate should be adapted depeding on the date format dash / slash
        let isPastDate = false
        if(dateRegexDash.test(trimmedValue)) isPastDate = (Date.parse(trimmedValue) - Date.now()) < 0
        if(dateRegexSlash.test(trimmedValue)) {
            const formattedDate = trimmedValue.split('/').reverse().join('-')
            isPastDate = (Date.parse(formattedDate) - Date.now()) < 0
        }
        return (dateRegexDash.test(trimmedValue) || dateRegexSlash.test(trimmedValue)) && isPastDate
    }*/

    static isDate(value: string) : boolean {
        const USFormatRegex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/
        const FRFormatRegex = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/
        return USFormatRegex.test(value.trim()) || FRFormatRegex.test(value.trim())
    }

    static isNumber(value: string) : boolean {
        const numberRegex = /^[0-9]+$/
        return numberRegex.test(value.trim())
    }

    static isDatePast(date: string) : boolean{
        if(!Validators.isDate(date)) return false
        console.log(new Date(date) < new Date())
        return new Date(date) < new Date()
    }

    static isEmail(inputValue : string) : boolean{
        const trimmedValue = inputValue.trim()
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return emailRegex.test(trimmedValue)
    }

    static isGender(inputValue : string) : boolean{
        return ['M', 'F', 'NC'].includes(inputValue)
    }

    static isEmpty(inputValue : string) : boolean{
        return inputValue.length===0
    }

    static isOneRadioChecked(radios : HTMLInputElement[]) : boolean{
        for (const radio of radios) {
            if (radio.checked) {
                return true
            }
        }

        return false
    }

    static isBoxChecked(inputNode : HTMLInputElement) : boolean{
        return inputNode.checked
    }
}