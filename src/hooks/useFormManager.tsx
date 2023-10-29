import { useState } from "react"

function useFormManager(initialInputsState : IInputs){

    const [inputsStates, setinputsStates] = useState<IInputs>(initialInputsState)

}

export default useFormManager

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

