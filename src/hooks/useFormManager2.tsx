/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"

export function useFormManager(fieldsNames : string[], nonMandatoryFields : string[]){
    
    const stateBase = {value : '', error : false, untouched : true, mandatory : true}

    // generate the initial state out of the fields names array
    let initialInputsState = fieldsNames.reduce((acc : IInputs, value : string) => ({...acc, [value] : {...stateBase, validators : []}}), {})
    // set the listed fields as non mandatory
    nonMandatoryFields.forEach(field => { 
        initialInputsState = {...initialInputsState, [field] : {...initialInputsState[field], mandatory : false}}
    })

    const [inputsStates, setinputsStates] = useState<IInputs>(initialInputsState)

    const virtualForm = {

        state : inputsStates,

        setinputsStates : setinputsStates,
        
        setValidator(name : string, validator : validator){
            if(!inputsStates[name]) console.error('wrong field name : ', name)
            setinputsStates(previousState => ({...previousState, [name] : {...previousState[name], validators : [...previousState[name].validators, validator]}}))
        },

        setValidators(validationRules : {fieldName : string, validators : validator[]}[]){
            validationRules.forEach(rules => {
                if(rules.validators.length === 1) return this.setValidator(rules.fieldName, rules.validators[0])
                rules.validators.forEach((_, index) => {
                    this.setValidator(rules.fieldName, rules.validators[index])
                })
            })
        },

        resetValidators(){
            Object.keys(inputsStates).forEach((key) => {
                setinputsStates(previousState => ({...previousState, [key] : {...previousState[key], validators : []}}))
            })
        },

        updateVirtualFormField(name : string, value : any, withSubsequentValidation = true){
            this.setinputsStates((previousState : IInputs) => ({...previousState, [name] : {...previousState[name], 'value' : value, untouched : false }}))
            if(withSubsequentValidation) this.realtimeInputValidation(name, value)
        },

        setError(inputName : string, errorStatus : boolean){
            this.setinputsStates(previousState => ({...previousState, [inputName] : {...previousState[inputName], error : errorStatus }}))
        },

        realtimeInputValidation(name : string, value : any) : boolean{
            // if the field is empty and non mandatory => validate
            if(!inputsStates[name].mandatory && inputsStates[name].value == "") {
                this.setError(name, false)
                return true
            }

            // if the field is empty and mandatory => setError
            if(inputsStates[name].mandatory && inputsStates[name].value == "") {
                this.setError(name, true)
                return false
            }

            const validationResult = inputsStates[name].validators.reduce((accumulator, validator) => accumulator + Number(validator(value)), 0)
            if(validationResult < inputsStates[name].validators.length) {
                this.setError(name, true)
                return false
            }
            this.setError(name, false)
            return true
        },

        setInitValues(fieldsnValues : {[key: string]: string}[]){
            // check if fieldname exists
            fieldsnValues.forEach((fieldnValue) => {
                const fieldnValueKey = Object.keys(fieldnValue)[0]
                if(inputsStates[fieldnValueKey]) this.updateVirtualFormField(fieldnValueKey, fieldnValue[fieldnValueKey], false)
            })
            /*setTimeout(() => console.log(inputsStates), 1000)
            console.log(inputsStates)*/
        },

        fullFormValidation() : boolean{
            const errorsKeys = []
            Object.keys(inputsStates).forEach((key) => {
                // if input blank and non mandatory
                if(!inputsStates[key].mandatory && inputsStates[key].value == "") {
                    this.setError(key, false)
                    return true
                }

                // if the field is empty and mandatory => setError
                if(inputsStates[key].mandatory && inputsStates[key].value == "") {
                    this.setError(key, true)
                    return false
                }
                
                // process all validators for the input
                const validationResult = inputsStates[key].validators.reduce((accumulator, validator) => accumulator + Number(validator(inputsStates[key].value)), 0)
                if(validationResult < inputsStates[key].validators.length) {
                    this.setError(key, true)
                    errorsKeys.push(key)
                }else{
                    this.setError(key, false)
                }
            })
            if(errorsKeys.length > 0 ) return false
            return true
        },
    }

    return virtualForm

}

export interface IInputs {
    [key: string]: {
        value: string,
        error: boolean,
        untouched: boolean,
        mandatory: boolean,
        validators: validator[],
    }
}

type validator = (value : any) => boolean

