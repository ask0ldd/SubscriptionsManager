/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react'
import Header from '../components/Header'
import '../style/MemberForm.css'
import { Validators } from '../services/validator'
import { useFormManager } from '../hooks/useFormManager2'

function MemberForm(){

    const fieldnames = [
        'lastname', 
        'firstname', 
        'birthdate', 
        'gender', 
        'address1', 
        'address2', 
        'city', 
        'postalcode', 
        'phone', 
        'email', 
        'mobile', 
        'emergencyContactLastname', 
        'emergencyContactFirstname', 
        'emergencyContactMobile',
    ]
    
    const nonMandatoryFields = [
        'address2',
        'phone'
    ]

    const virtualForm = useFormManager(fieldnames, nonMandatoryFields)

    useEffect(() => {
        // help with double useeffect triggering in dev mode
        virtualForm.resetValidators()

        virtualForm.setValidators([
            {fieldName : 'lastname', validators : [Validators.isName]},
            {fieldName : 'firstname', validators : [Validators.isName]},
            {fieldName : 'birthdate', validators : [Validators.isDate]},
            {fieldName : 'gender', validators : [Validators.isGender]},
            {fieldName : 'address1', validators : []},
            {fieldName : 'address2', validators : []},
            {fieldName : 'city', validators : [Validators.isName]},
            {fieldName : 'postalcode', validators : [Validators.isPositiveNumber]},
            {fieldName : 'phone', validators : [Validators.isPositiveNumber]},
            {fieldName : 'email', validators : [Validators.isEmail]},
            {fieldName : 'mobile', validators : [Validators.isPositiveNumber]},
            {fieldName : 'emergencyContactLastname', validators : [Validators.isName]},
            {fieldName : 'emergencyContactFirstname', validators : [Validators.isName]},
            {fieldName : 'emergencyContactMobile',validators : [Validators.isPositiveNumber]},
        ])
    }, [])

    function handleChange(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.currentTarget
        virtualForm.updateVirtualFormField(name, value)
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        virtualForm.fullFormValidation()
        console.log('state : ', virtualForm.state)
    }

    return (
    <>
        <Header/>
        <main className='main-newMember'>
            <form className="form-newMember" onSubmit={handleSubmit}>

                <div className='duoRow'>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="lastname">Lastname</label>{virtualForm.state.lastname?.error && <span>Error Message</span>}</div>
                        <input name="lastname" value={virtualForm.state.lastname?.value || ''} onChange={handleChange} id="lastname" type="text"/>
                    </div>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="firstname">Firstname</label>{virtualForm.state.firstname?.error && <span>Error Message</span>}</div>
                        <input name="firstname" value={virtualForm.state.firstname?.value || ''} onChange={handleChange} id="firstname" type="text"/>
                    </div>
                </div>

                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="birthdate">Birthdate</label>{virtualForm.state.birthdate?.error && <span>Error Message</span>}</div>
                        <input name="birthdate" value={virtualForm.state.birthdate?.value || ''} onChange={handleChange} id="birthdate" type="text"/>
                    </div>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="gender">Gender</label>{virtualForm.state.gender?.error && <span>Error Message</span>}</div>
                        <input name="gender" value={virtualForm.state.gender?.value || ''} onChange={handleChange} id="gender" type="text"/>
                    </div>
                </div>

                <div className='soloRow defaultSpacing'>
                    <div className='labelErrorContainer'><label htmlFor="address1">Address [1]</label>{virtualForm.state.address1?.error && <span>Error Message</span>}</div>
                    <input name="address1" value={virtualForm.state.address1?.value || ''} onChange={handleChange} id="address1" type="text"/>
                </div>

                <div className='soloRow defaultSpacing'>
                    <div className='labelErrorContainer'><label htmlFor="address2">Address [2]</label>{virtualForm.state.address2?.error && <span>Error Message</span>}</div>
                    <input name="address2" value={virtualForm.state.address2?.value || ''} onChange={handleChange} id="address2" type="text"/>
                </div>

                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="postalcode">Postal Code</label>{virtualForm.state.postalcode?.error && <span>Error Message</span>}</div>
                        <input name="postalcode" value={virtualForm.state.postalcode?.value || ''} onChange={handleChange} id="postalcode" type="text"/>
                    </div>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="city">City</label>{virtualForm.state.city?.error && <span>Error Message</span>}</div>
                        <input name="city" value={virtualForm.state.city?.value || ''} onChange={handleChange} id="city" type="text"/>
                    </div>
                </div>

                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="phone">Phone</label>{virtualForm.state.phone?.error && <span>Error Message</span>}</div>
                        <input name="phone" value={virtualForm.state.phone?.value || ''} onChange={handleChange} id="phone" type="text"/>
                    </div>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="email">Email</label>{virtualForm.state.email?.error && <span>Error Message</span>}</div>
                        <input name="email" value={virtualForm.state.email?.value || ''} onChange={handleChange} id="email" type="text"/>
                    </div>
                </div>

                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="mobile">Mobile</label>{virtualForm.state.mobile?.error && <span>Error Message</span>}</div>
                        <input name="mobile" value={virtualForm.state.mobile?.value || ''} onChange={handleChange} id="mobile" type="text"/>
                    </div>
                    <div className='soloRow'>
                    </div>
                </div>

                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="emergencyContactLastname">Lastname</label>{virtualForm.state.emergencyContactLastname?.error && <span>Error Message</span>}</div>
                        <input name="emergencyContactLastname" value={virtualForm.state.emergencyContactLastname?.value || ''} onChange={handleChange} id="emergencyContact-lastname" type="text"/>
                    </div>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="emergencyContactFirstname">Firstname</label>{virtualForm.state.emergencyContactFirstname?.error && <span>Error Message</span>}</div>
                        <input name="emergencyContactFirstname" value={virtualForm.state.emergencyContactFirstname?.value || ''} onChange={handleChange} id="emergencyContact-firstname" type="text"/>
                    </div>
                </div>

                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="emergencyContactMobile">Mobile</label>{virtualForm.state.emergencyContactMobile?.error && <span>Error Message</span>}</div>
                        <input name="emergencyContactMobile" value={virtualForm.state.emergencyContactMobile?.value || ''} onChange={handleChange} id="emergencyContact-mobile" type="text"/>
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

export default MemberForm