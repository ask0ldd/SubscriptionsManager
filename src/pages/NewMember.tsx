import { useState } from 'react'
import Header from '../components/Header'
import '../style/NewMember.css'
import { Validators } from '../services/validator'

function NewMember(){

    setValidators(initialInputsState)

    const [inputsStates, setinputsStates] = useState<IInputs>(initialInputsState)
    // const [formErrors, setFormErrors] = useState<IFormErrors>(initialStateFormErrors)
    // name, value, error, untouched, mandatory, validators : fn[]

    function handleChange(event: React.FormEvent<HTMLInputElement>){
        const {name, value} = event.currentTarget
        setinputsStates(previousState => ({...previousState, [name] : {...previousState[name], 'value' : value, untouched : false }}))
        // handleValidation(inputsStates)
        realtimeInputValidation(name, value)
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        console.log(inputsStates)
        if(!handleValidation(inputsStates)) console.error('invalid form')
    }

    function setInputError(inputName : string, errorStatus : boolean){
        setinputsStates(previousState => ({...previousState, [inputName] : {...previousState[inputName], error : errorStatus }}))
    }

    function resetInputsErrors(){
        let updatedInputStatesCopy = {}
        Object.keys(inputsStates).forEach((key) => updatedInputStatesCopy = {...updatedInputStatesCopy, [key] : {...inputsStates[key], error : false }})
        setinputsStates(updatedInputStatesCopy)
    }

    function handleValidation(inputValues : IInputs) : boolean{
        resetInputsErrors()
        if(!Validators.isName(inputValues.lastname.value)) setInputError('lastname', true)
        if(!Validators.isName(inputValues.firstname.value)) setInputError('firstname', true)
        if(!Validators.isDate(inputValues.birthdate.value)) setInputError('gender', true)
        if(!Validators.isNumber(inputValues.postalcode.value)) setInputError('postalcode', true)
        if(!Validators.isName(inputValues.city.value)) setInputError('city', true)
        if(!Validators.isNumber(inputValues.phone.value)) setInputError('phone', true)
        if(!Validators.isEmail(inputValues.email.value)) setInputError('email', true)
        if(!Validators.isNumber(inputValues.mobile.value)) setInputError('mobile', true)
        if(!Validators.isName(inputValues.emergencyContactLastname.value)) setInputError('emergencyContactLastname', true)
        if(!Validators.isName(inputValues.emergencyContactFirstname.value)) setInputError('emergencyContactFirstname', true)
        if(!Validators.isNumber(inputValues.emergencyContactMobile.value)) setInputError('emergencyContactMobile', true)
        const errors : boolean[] = []
        Object.keys(inputsStates).forEach((key) => errors.push(inputsStates[key].error))
        if (errors.includes(false)) return false
        return true
    }

    function realtimeInputValidation(name : string, value : any){
        const validationResult = inputsStates[name].validators.reduce((accumulator, validator) => accumulator + Number(validator(value)), 0)
        if(validationResult < inputsStates[name].validators.length) {
            inputsStates[name].error = true
            return false
        }
        inputsStates[name].error = false
        return true
    }

    function setValidators(initialInputsState : IInputs){
        initialInputsState.lastname.validators.push(Validators.isName)
        initialInputsState.firstname.validators.push(Validators.isName)
        initialInputsState.birthdate.validators.push(Validators.isDate)
        initialInputsState.postalcode.validators.push(Validators.isNumber)
        initialInputsState.city.validators.push(Validators.isName)
        initialInputsState.phone.validators.push(Validators.isNumber)
        initialInputsState.email.validators.push(Validators.isEmail)
        initialInputsState.mobile.validators.push(Validators.isNumber)
        initialInputsState.emergencyContactLastname.validators.push(Validators.isName)
        initialInputsState.emergencyContactFirstname.validators.push(Validators.isName)
        initialInputsState.emergencyContactMobile.validators.push(Validators.isNumber)
    }

    return (
    <>
        <Header/>
        <main className='main-newMember'>
            <form className="form-newMember" onSubmit={handleSubmit}>

                <div className='duoRow'>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="lastname">Lastname</label>{inputsStates?.lastname?.error && <span>Error Message</span>}</div>
                        <input name="lastname" value={inputsStates?.lastname?.value || ''} onChange={handleChange} id="lastname" type="text"/>
                    </div>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="firstname">Firstname</label>{inputsStates?.firstname?.error && <span>Error Message</span>}</div>
                        <input name="firstname" value={inputsStates?.firstname?.value || ''} onChange={handleChange} id="firstname" type="text"/>
                    </div>
                </div>

                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="birthdate">Birthdate</label>{inputsStates?.birthdate?.error && <span>Error Message</span>}</div>
                        <input name="birthdate" value={inputsStates?.birthdate?.value || ''} onChange={handleChange} id="birthdate" type="text"/>
                    </div>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="gender">Gender</label>{inputsStates?.gender?.error && <span>Error Message</span>}</div>
                        <input name="gender" value={inputsStates?.gender?.value || ''} onChange={handleChange} id="gender" type="text"/>
                    </div>
                </div>

                <div className='soloRow defaultSpacing'>
                    <div className='labelErrorContainer'><label htmlFor="address1">Address [1]</label>{inputsStates?.address1?.error && <span>Error Message</span>}</div>
                    <input name="address1" value={inputsStates?.address1?.value || ''} onChange={handleChange} id="address1" type="text"/>
                </div>

                <div className='soloRow defaultSpacing'>
                    <div className='labelErrorContainer'><label htmlFor="address2">Address [2]</label>{inputsStates?.address2?.error && <span>Error Message</span>}</div>
                    <input name="address2" value={inputsStates?.address2?.value || ''} onChange={handleChange} id="address2" type="text"/>
                </div>

                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="postalcode">Postal Code</label>{inputsStates?.postalcode?.error && <span>Error Message</span>}</div>
                        <input name="postalcode" value={inputsStates?.postalcode?.value || ''} onChange={handleChange} id="postalcode" type="text"/>
                    </div>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="city">City</label>{inputsStates?.city?.error && <span>Error Message</span>}</div>
                        <input name="city" value={inputsStates?.city?.value || ''} onChange={handleChange} id="city" type="text"/>
                    </div>
                </div>

                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="phone">Phone</label>{inputsStates?.phone?.error && <span>Error Message</span>}</div>
                        <input name="phone" value={inputsStates?.phone?.value || ''} onChange={handleChange} id="phone" type="text"/>
                    </div>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="email">Email</label>{inputsStates?.email?.error && <span>Error Message</span>}</div>
                        <input name="email" value={inputsStates?.email?.value || ''} onChange={handleChange} id="email" type="text"/>
                    </div>
                </div>

                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="mobile">Mobile</label>{inputsStates?.mobile?.error && <span>Error Message</span>}</div>
                        <input name="mobile" value={inputsStates?.mobile?.value || ''} onChange={handleChange} id="mobile" type="text"/>
                    </div>
                    <div className='soloRow'>
                    </div>
                </div>

                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="emergencyContactLastname">Lastname</label>{inputsStates?.emergencyContactLastname?.error && <span>Error Message</span>}</div>
                        <input name="emergencyContactLastname" value={inputsStates?.emergencyContactLastname?.value || ''} onChange={handleChange} id="emergencyContact-lastname" type="text"/>
                    </div>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="emergencyContactFirstname">Firstname</label>{inputsStates?.emergencyContactFirstname?.error && <span>Error Message</span>}</div>
                        <input name="emergencyContactFirstname" value={inputsStates?.emergencyContactFirstname?.value || ''} onChange={handleChange} id="emergencyContact-firstname" type="text"/>
                    </div>
                </div>

                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="emergencyContactMobile">Mobile</label>{inputsStates?.emergencyContactMobile?.error && <span>Error Message</span>}</div>
                        <input name="emergencyContactMobile" value={inputsStates?.emergencyContactMobile?.value || ''} onChange={handleChange} id="emergencyContact-mobile" type="text"/>
                    </div>
                    <div className='soloRow'>
                    </div>
                </div>
                
                <div style={{width:'100%'}}>
                <input id="newMemberSubmit" type="submit" value="Register this new Member"/>
                </div>
            </form>
        </main>
    </>
    )
}

export default NewMember

/*interface IState {
    lastname?: string
    firstname?: string
    birthdate?: string
    gender?: 'M' | 'F' | 'NC'
    address1?: string
    address2?: string
    postalcode?: string
    city?: string
    phone?: string
    email?: string
    mobile?: string
    emergencyContactLastname?: string
    emergencyContactFirstname?: string
    emergencyContactMobile?: string
}*/

interface IInputs {
    [key: string]: {
        value: string,
        error: boolean,
        untouched: boolean,
        mandatory: boolean,
        validators: validator[],
    };
}

type validator = (value : any) => boolean

const initialInputsState : IInputs = {
    lastname : {value : '', error : false, untouched : true, mandatory : false, validators : [],},
    firstname : {value : '', error : false, untouched : true, mandatory : false, validators : [],},
    birthdate : {value : '', error : false, untouched : true, mandatory : false, validators : [],},
    gender : {value : '', error : false, untouched : true, mandatory : false, validators : [],},
    address1 : {value : '', error : false, untouched : true, mandatory : false, validators : [],},
    address2 : {value : '', error : false, untouched : true, mandatory : false, validators : [],},
    city: {value : '', error : false, untouched : true, mandatory : false, validators : [],},
    postalcode : {value : '', error : false, untouched : true, mandatory : false, validators : [],},
    phone : {value : '', error : false, untouched : true, mandatory : false, validators : [],},
    email : {value : '', error : false, untouched : true, mandatory : false, validators : [],},
    mobile : {value : '', error : false, untouched : true, mandatory : false, validators : [],},
    emergencyContactLastname : {value : '', error : false, untouched : true, mandatory : false, validators : [],},
    emergencyContactFirstname : {value : '', error : false, untouched : true, mandatory : false, validators : [],},
    emergencyContactMobile : {value : '', error : false, untouched : true, mandatory : false, validators : [],},
}