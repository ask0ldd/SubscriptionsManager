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

    return [inputsStates, setinputsStates]

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

