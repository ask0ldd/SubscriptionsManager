import { useState } from 'react'
import Header from '../components/Header'
import '../style/NewMember.css'
import { Validators } from '../services/validator'

function NewMember(){

    const [inputsValues, setInputsValues] = useState<IState>({})
    const [formErrors, setFormErrors] = useState<IFormErrors>(initialStateFormErrors)

    function handleChange(event: React.FormEvent<HTMLInputElement>){
        const name = event.currentTarget.name
        const value = event.currentTarget.value
        setInputsValues(previousState => ({...previousState, [name] : value}))
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        console.log(inputsValues)
        if(!handleValidation(inputsValues)) console.error('invalid form')
    }

    function handleValidation(inputValues : IState) : boolean{
        setFormErrors(initialStateFormErrors)
        if(!inputValues.lastname || !Validators.isName(inputValues.lastname)) setFormErrors(previousState => ({...previousState, lastname : true}))
        if(!inputValues.firstname || !Validators.isName(inputValues.firstname)) setFormErrors(previousState => ({...previousState, firstname : true}))
        if(!inputValues.birthdate || !Validators.isDate(inputValues.birthdate)) setFormErrors(previousState => ({...previousState, gender : true}))
        if(!inputValues.postalcode || !Validators.isNumber(inputValues.postalcode)) setFormErrors(previousState => ({...previousState, postalcode : true}))
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
                        <div className='labelErrorContainer'><label htmlFor="lastname">Lastname</label>{formErrors.lastname && <span>Error Message</span>}</div>
                        <input name="lastname" value={inputsValues?.lastname || ''} onChange={handleChange} id="lastname" type="text"/>
                    </div>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="firstname">Firstname</label>{formErrors.firstname && <span>Error Message</span>}</div>
                        <input name="firstname" value={inputsValues?.firstname || ''} onChange={handleChange} id="firstname" type="text"/>
                    </div>
                </div>

                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="birthdate">Birthdate</label>{formErrors.birthdate && <span>Error Message</span>}</div>
                        <input name="birthdate" value={inputsValues?.birthdate || ''} onChange={handleChange} id="birthdate" type="text"/>
                    </div>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="gender">Gender</label>{formErrors.gender && <span>Error Message</span>}</div>
                        <input name="gender" value={inputsValues?.gender || ''} onChange={handleChange} id="gender" type="text"/>
                    </div>
                </div>

                <div className='soloRow defaultSpacing'>
                    <div className='labelErrorContainer'><label htmlFor="address1">Address [1]</label>{formErrors.address1 && <span>Error Message</span>}</div>
                    <input name="address1" value={inputsValues?.address1 || ''} onChange={handleChange} id="address1" type="text"/>
                </div>

                <div className='soloRow defaultSpacing'>
                    <div className='labelErrorContainer'><label htmlFor="address2">Address [2]</label>{formErrors.address2 && <span>Error Message</span>}</div>
                    <input name="address2" value={inputsValues?.address2 || ''} onChange={handleChange} id="address2" type="text"/>
                </div>

                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="postalcode">Postal Code</label>{formErrors.postalcode && <span>Error Message</span>}</div>
                        <input name="postalcode" value={inputsValues?.postalcode || ''} onChange={handleChange} id="postalcode" type="text"/>
                    </div>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="city">City</label>{formErrors.city && <span>Error Message</span>}</div>
                        <input name="city" value={inputsValues?.city || ''} onChange={handleChange} id="city" type="text"/>
                    </div>
                </div>

                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="phone">Phone</label>{formErrors.phone && <span>Error Message</span>}</div>
                        <input name="phone" value={inputsValues?.phone || ''} onChange={handleChange} id="phone" type="text"/>
                    </div>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="email">Email</label>{formErrors.email && <span>Error Message</span>}</div>
                        <input name="email" value={inputsValues?.email || ''} onChange={handleChange} id="email" type="text"/>
                    </div>
                </div>

                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="mobile">Mobile</label>{formErrors.mobile && <span>Error Message</span>}</div>
                        <input name="mobile" value={inputsValues?.mobile || ''} onChange={handleChange} id="mobile" type="text"/>
                    </div>
                    <div className='soloRow'>
                    </div>
                </div>

                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="emergencyContactLastname">Lastname</label>{formErrors.emergencyContactLastname && <span>Error Message</span>}</div>
                        <input name="emergencyContactLastname" value={inputsValues?.emergencyContactLastname || ''} onChange={handleChange} id="emergencyContact-lastname" type="text"/>
                    </div>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="emergencyContactFirstname">Firstname</label>{formErrors.emergencyContactFirstname && <span>Error Message</span>}</div>
                        <input name="emergencyContactFirstname" value={inputsValues?.emergencyContactFirstname || ''} onChange={handleChange} id="emergencyContact-firstname" type="text"/>
                    </div>
                </div>

                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="emergencyContactMobile">Mobile</label>{formErrors.emergencyContactMobile && <span>Error Message</span>}</div>
                        <input name="emergencyContactMobile" value={inputsValues?.emergencyContactMobile || ''} onChange={handleChange} id="emergencyContact-mobile" type="text"/>
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

interface IFormErrors {
    lastname?: boolean
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
    emergencyContactMobile?: boolean
}

const initialStateFormErrors = {
    lastname : false,
    firstname : false,
    birthdate : false,
    gender : false,
    postalcode : false,
    phone : false,
    email : false,
    mobile : false,
    emergencyContactLastname : false,
    emergencyContactFirstname : false,
    emergencyContactMobile : false,
}