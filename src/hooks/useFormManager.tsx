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
    // setValidators(initialInputsState)

    const [inputsStates, setinputsStates] = useState<IInputs>(initialInputsState)

    function setValidator(name : string, validator : validator){
        if(!inputsStates[name]) console.error('wrong field name : ', name)
        setinputsStates(previousState => ({...previousState, [name] : {...previousState[name], validators : [...previousState[name].validators, validator]}}))
    }

    function setValidators(validationRules : {fieldName : string, validators : validator[]}[]){
        validationRules.forEach(rules => {
            if(rules.validators.length === 1) return setValidator(rules.fieldName, rules.validators[0])
            rules.validators.forEach((rule, index) => {
                setValidator(rules.fieldName, rules.validators[index])
            })
        })
    }

    function updateVirtualFormField(name : string, value : any){
        setinputsStates((previousState : IInputs) => ({...previousState, [name] : {...previousState[name], 'value' : value, untouched : false }}))
        realtimeInputValidation(name, value)
    }

    function setInputError(inputName : string, errorStatus : boolean){
        setinputsStates(previousState => ({...previousState, [inputName] : {...previousState[inputName], error : errorStatus }}))
    }

    function realtimeInputValidation(name : string, value : any) : boolean{
        if(!inputsStates[name].mandatory && inputsStates[name].value == "") {
            setInputError(name, false)
            return true
        }
        const validationResult = inputsStates[name].validators.reduce((accumulator, validator) => accumulator + Number(validator(value)), 0)
        if(validationResult < inputsStates[name].validators.length) {
            setInputError(name, true)
            return false
        }
        setInputError(name, false)
        return true
    }

    return {inputsStates, setinputsStates, setValidators, updateVirtualFormField}

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

