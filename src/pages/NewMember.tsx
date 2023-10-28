import { useState } from 'react'
import Header from '../components/Header'
import '../style/NewMember.css'
import { Validators } from '../services/validator'

function NewMember(){

    const [inputsStates, setinputsStates] = useState<IInputs>({})
    // const [formErrors, setFormErrors] = useState<IFormErrors>(initialStateFormErrors)
    // name, value, error, untouched, mandatory

    function handleChange(event: React.FormEvent<HTMLInputElement>){
        const {name, value} = event.currentTarget
        setinputsStates(previousState => ({...previousState, [name] : {...previousState[name], value : value }}))
        handleValidation(inputsStates)
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

    }

    function handleValidation(inputValues : IState) : boolean{
        setFormErrors(initialStateFormErrors)
        if(!inputValues.lastname || !Validators.isName(inputValues.lastname)) setFormErrors(previousState => ({...previousState, lastname : true}))
        if(!inputValues.firstname || !Validators.isName(inputValues.firstname)) setFormErrors(previousState => ({...previousState, firstname : true}))
        if(!inputValues.birthdate || !Validators.isDate(inputValues.birthdate)) setFormErrors(previousState => ({...previousState, gender : true}))
        if(!inputValues.postalcode || !Validators.isNumber(inputValues.postalcode)) setFormErrors(previousState => ({...previousState, postalcode : true}))
        if(!inputValues.city || !Validators.isName(inputValues.city)) setFormErrors(previousState => ({...previousState, city : true}))
        if(!inputValues.phone || !Validators.isNumber(inputValues.phone)) setFormErrors(previousState => ({...previousState, phone : true}))
        if(!inputValues.email || !Validators.isEmail(inputValues.email)) setFormErrors(previousState => ({...previousState, email : true}))
        if(!inputValues.mobile || !Validators.isNumber(inputValues.mobile)) setFormErrors(previousState => ({...previousState, mobile : true}))
        if(!inputValues.emergencyContactLastname || !Validators.isName(inputValues.emergencyContactLastname)) setFormErrors(previousState => ({...previousState, emergencyContactLastname : true}))
        if(!inputValues.emergencyContactFirstname || !Validators.isName(inputValues.emergencyContactFirstname)) setFormErrors(previousState => ({...previousState, emergencyContactFirstname : true}))
        if(!inputValues.emergencyContactMobile || !Validators.isNumber(inputValues.emergencyContactMobile)) setFormErrors(previousState => ({...previousState, emergencyContactMobile : true}))
        if(JSON.stringify(formErrors) != JSON.stringify(initialStateFormErrors)) return false
        return true
    }

    function handleRealtimeValidation(inputValues : IState) : boolean{
        setFormErrors(initialStateFormErrors)
        if(!inputValues.lastname || !Validators.isName(inputValues.lastname)) setFormErrors(previousState => ({...previousState, lastname : true}))
        if(!inputValues.firstname || !Validators.isName(inputValues.firstname)) setFormErrors(previousState => ({...previousState, firstname : true}))
        if(!inputValues.birthdate || !Validators.isDate(inputValues.birthdate)) setFormErrors(previousState => ({...previousState, gender : true}))
        if(!inputValues.postalcode || !Validators.isNumber(inputValues.postalcode)) setFormErrors(previousState => ({...previousState, postalcode : true}))
        if(!inputValues.city || !Validators.isName(inputValues.city)) setFormErrors(previousState => ({...previousState, city : true}))
        if(!inputValues.phone || !Validators.isNumber(inputValues.phone)) setFormErrors(previousState => ({...previousState, phone : true}))
        if(!inputValues.email || !Validators.isEmail(inputValues.email)) setFormErrors(previousState => ({...previousState, email : true}))
        if(!inputValues.mobile || !Validators.isNumber(inputValues.mobile)) setFormErrors(previousState => ({...previousState, mobile : true}))
        if(!inputValues.emergencyContactLastname || !Validators.isName(inputValues.emergencyContactLastname)) setFormErrors(previousState => ({...previousState, emergencyContactLastname : true}))
        if(!inputValues.emergencyContactFirstname || !Validators.isName(inputValues.emergencyContactFirstname)) setFormErrors(previousState => ({...previousState, emergencyContactFirstname : true}))
        if(!inputValues.emergencyContactMobile || !Validators.isNumber(inputValues.emergencyContactMobile)) setFormErrors(previousState => ({...previousState, emergencyContactMobile : true}))
        if(JSON.stringify(formErrors) != JSON.stringify(initialStateFormErrors)) return false
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

interface IState {
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
}

type IInputs = {
    [name : string] : {
        value : string, 
        error : boolean, 
        untouched : boolean, 
        mandatory : boolean,
    }
}

type IFormErrors = {[name : string] : boolean}
    /*lastname?: boolean
    firstname?: boolean
    birthdate?: boolean
    gender?: boolean
    address1?: boolean
    address2?: boolean
    postalcode?: boolean
    city?: boolean
    phone?: boolean
    email?: boolean
    mobile?: boolean
    emergencyContactLastname?: boolean
    emergencyContactFirstname?: boolean
    emergencyContactMobile?: boolean*/

const initialStateFormErrors : IFormErrors = {
    lastname : false,
    firstname : false,
    birthdate : false,
    gender : false,
    address1 : false,
    address2 : false,
    city: false,
    postalcode : false,
    phone : false,
    email : false,
    mobile : false,
    emergencyContactLastname : false,
    emergencyContactFirstname : false,
    emergencyContactMobile : false,
}