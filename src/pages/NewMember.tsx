import { useState } from 'react'
import Header from '../components/Header'
import '../style/NewMember.css'

function NewMember(){

    const [inputsValues, setInputsValues] = useState<IState>({})

    function handleChange(event: React.FormEvent<HTMLInputElement>){
        const name = event.currentTarget.name
        const value = event.currentTarget.value
        // setInputsValues(values => ({...values, [name]: value}))
        setInputsValues({...inputsValues, [name] : value})
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        console.log('state : ', inputsValues)
    }

    return (
    <>
        <Header/>
        <main className='main-newMember'>
            <form className="form-newMember" onSubmit={handleSubmit}>

                <div className='duoRow'>
                    <div className='soloRow'>
                        <label htmlFor="lastname">Lastname</label>
                        <input name="lastname" value={inputsValues?.lastname || ''} onChange={handleChange} id="lastname" type="text"/>
                    </div>
                    <div className='soloRow'>
                        <label htmlFor="firstname">Firstname</label>
                        <input name="firstname" value={inputsValues?.firstname || ''} onChange={handleChange} id="firstname" type="text"/>
                    </div>
                </div>

                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <label htmlFor="birthdate">Birthdate</label>
                        <input name="birthdate" value={inputsValues?.birthdate || ''} onChange={handleChange} id="birthdate" type="text"/>
                    </div>
                    <div className='soloRow'>
                        <label htmlFor="gender">Gender</label>
                        <input name="gender" value={inputsValues?.gender || ''} onChange={handleChange} id="gender" type="text"/>
                    </div>
                </div>

                <div className='soloRow defaultSpacing'>
                    <label htmlFor="address1">Address [1]</label>
                    <input name="address1" value={inputsValues?.address1 || ''} onChange={handleChange} id="address1" type="text"/>
                </div>

                <div className='soloRow defaultSpacing'>
                    <label htmlFor="address2">Address [2]</label>
                    <input name="address2" value={inputsValues?.address2 || ''} onChange={handleChange} id="address2" type="text"/>
                </div>

                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <label htmlFor="postalcode">Postal Code</label>
                        <input name="postalcode" value={inputsValues?.postalcode || ''} onChange={handleChange} id="postalcode" type="text"/>
                    </div>
                    <div className='soloRow'>
                        <label htmlFor="city">City</label>
                        <input name="city" value={inputsValues?.city || ''} onChange={handleChange} id="city" type="text"/>
                    </div>
                </div>

                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <label htmlFor="phone">Phone</label>
                        <input name="phone" value={inputsValues?.phone || ''} onChange={handleChange} id="phone" type="text"/>
                    </div>
                    <div className='soloRow'>
                        <label htmlFor="email">Email</label>
                        <input name="email" value={inputsValues?.email || ''} onChange={handleChange} id="email" type="text"/>
                    </div>
                </div>

                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <label htmlFor="mobile">Mobile</label>
                        <input name="mobile" value={inputsValues?.mobile || ''} onChange={handleChange} id="mobile" type="text"/>
                    </div>
                    <div className='soloRow'>
                    </div>
                </div>

                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <label htmlFor="emergencyContact-lastname">Lastname</label>
                        <input name="emergencyContactLastname" value={inputsValues?.emergencyContactLastname || ''} onChange={handleChange} id="emergencyContact-lastname" type="text"/>
                    </div>
                    <div className='soloRow'>
                        <label htmlFor="emergencyContact-firstname">Firstname</label>
                        <input name="emergencyContactFirstname" value={inputsValues?.emergencyContactFirstname || ''} onChange={handleChange} id="emergencyContact-firstname" type="text"/>
                    </div>
                </div>

                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <label htmlFor="emergencyContact-mobile">Mobile</label>
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