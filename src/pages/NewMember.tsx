import { useState } from 'react'
import Header from '../components/Header'
import '../style/NewMember.css'

function NewMember(){

    const [inputsValues, newInputsValues] = useState<IState>({})

    function handleChange(event: React.FormEvent<HTMLInputElement>){
        const name = event.currentTarget.name
        const value = event.currentTarget.value
        // newInputsValues(values => ({...values, [name]: value}))
        newInputsValues({...inputsValues, [name] : value})
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

                <div className='duoRow'>
                    <div className='soloRow'>
                        <label className='defaultSpacing' htmlFor="birthdate">Birthdate</label>
                        <input id="birthdate" type="text"/>
                    </div>
                    <div className='soloRow'>
                        <label className='defaultSpacing' htmlFor="gender">Gender</label>
                        <input id="gender" type="text"/>
                    </div>
                </div>

                <div className='soloRow'>
                    <label className='defaultSpacing' htmlFor="address1">Address [1]</label>
                    <input id="address1" type="text"/>
                </div>

                <div className='soloRow'>
                    <label className='defaultSpacing' htmlFor="address1">Address [2]</label>
                    <input id="address1" type="text"/>
                </div>

                <div className='duoRow'>
                    <div className='soloRow'>
                        <label className='defaultSpacing' htmlFor="postalcode">Postal Code</label>
                        <input id="postalcode" type="text"/>
                    </div>
                    <div className='soloRow'>
                        <label className='defaultSpacing' htmlFor="city">City</label>
                        <input id="city" type="text"/>
                    </div>
                </div>

                <div className='duoRow'>
                    <div className='soloRow'>
                        <label className='defaultSpacing' htmlFor="phone">Phone</label>
                        <input id="phone" type="text"/>
                    </div>
                    <div className='soloRow'>
                        <label className='defaultSpacing' htmlFor="email">Email</label>
                        <input id="email" type="text"/>
                    </div>
                </div>

                <div className='duoRow'>
                    <div className='soloRow'>
                        <label className='defaultSpacing' htmlFor="mobile">Mobile</label>
                        <input id="phone" type="text"/>
                    </div>
                    <div className='soloRow'>
                    </div>
                </div>

                <div className='duoRow'>
                    <div className='soloRow'>
                        <label className='defaultSpacing' htmlFor="emergencyContact-lastname">Lastname</label>
                        <input id="emergencyContact-lastname" type="text"/>
                    </div>
                    <div className='soloRow'>
                        <label className='defaultSpacing' htmlFor="emergencyContact-firstname">Firstname</label>
                        <input id="emergencyContact-firstname" type="text"/>
                    </div>
                </div>

                <div className='duoRow'>
                    <div className='soloRow'>
                        <label className='defaultSpacing' htmlFor="emergencyContact-mobile">Mobile</label>
                        <input id="emergencyContact-mobile" type="text"/>
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
}