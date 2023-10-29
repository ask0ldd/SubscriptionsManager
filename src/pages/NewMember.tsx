import { useState } from 'react'
import Header from '../components/Header'
import '../style/NewMember.css'
import { Validators } from '../services/validator'
import { IInputs } from '../hooks/useFormManager'

function NewMember(){

    setValidators(initialInputsState)

    const [inputsStates, setinputsStates] = useState<IInputs>(initialInputsState)

    function handleChange(event: React.FormEvent<HTMLInputElement>){
        const {name, value} = event.currentTarget
        setinputsStates(previousState => ({...previousState, [name] : {...previousState[name], 'value' : value, untouched : false }}))
        realtimeInputValidation(name, value)
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        console.log(inputsStates)
        if(!fullFormValidation(inputsStates)) console.error('invalid form')
    }

    function setInputError(inputName : string, errorStatus : boolean){
        setinputsStates(previousState => ({...previousState, [inputName] : {...previousState[inputName], error : errorStatus }}))
    }

    /*function resetInputsErrors(){
        let updatedInputStatesCopy = {}
        Object.keys(inputsStates).forEach((key) => updatedInputStatesCopy = {...updatedInputStatesCopy, [key] : {...inputsStates[key], error : false }})
        setinputsStates(updatedInputStatesCopy)
    }*/

    function fullFormValidation(inputsStates : IInputs) : boolean{
        // resetInputsErrors()
        const errorsKeys = []
        Object.keys(inputsStates).forEach((key) => {
            // if input blank and non mandatory
            if(!inputsStates[key].mandatory && inputsStates[key].value == "") {
                setInputError(key, false)
                return true
            }
            // process all validators for the input
            const validationResult = inputsStates[key].validators.reduce((accumulator, validator) => accumulator + Number(validator(inputsStates[key].value)), 0)
            if(validationResult < inputsStates[key].validators.length) {
                setInputError(key, true)
                errorsKeys.push(key)
            }else{
                setInputError(key, false)
            }
        })
        if(errorsKeys.length > 0 ) return false
        return true
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

const stateBase = {value : '', error : false, untouched : true, mandatory : true}

const initialInputsState : IInputs = {
    lastname : {...stateBase, validators : []},
    firstname : {...stateBase, validators : []},
    birthdate : {...stateBase, validators : []},
    gender : {...stateBase, validators : []},
    address1 : {...stateBase, validators : []},
    address2 : {...stateBase, validators : []},
    city: {...stateBase, validators : []},
    postalcode : {...stateBase, validators : []},
    phone : {...stateBase, validators : []},
    email : {...stateBase, validators : []},
    mobile : {...stateBase, validators : []},
    emergencyContactLastname : {...stateBase, validators : []},
    emergencyContactFirstname : {...stateBase, validators : []},
    emergencyContactMobile : {...stateBase, validators : []},
}

function setValidators(initialInputsState : IInputs){
    initialInputsState.lastname.validators.push(Validators.isName)
    initialInputsState.firstname.validators.push(Validators.isName)
    initialInputsState.birthdate.validators.push(Validators.isDate)
    initialInputsState.postalcode.validators.push(Validators.isNumber)
    initialInputsState.gender.validators.push(Validators.isGender)
    initialInputsState.address1.validators.push(Validators.isName)
    initialInputsState.address2.validators.push(Validators.isName)
    initialInputsState.city.validators.push(Validators.isName)
    initialInputsState.phone.validators.push(Validators.isNumber)
    initialInputsState.email.validators.push(Validators.isEmail)
    initialInputsState.mobile.validators.push(Validators.isNumber)
    initialInputsState.emergencyContactLastname.validators.push(Validators.isName)
    initialInputsState.emergencyContactFirstname.validators.push(Validators.isName)
    initialInputsState.emergencyContactMobile.validators.push(Validators.isNumber)
}