import { useState } from 'react'
import Header from '../components/Header'
import '../style/NewRemainder.css'

function NewRemainder(){

    const [inputsValues, setInputsValues] = useState<IState>({})

    function handleChange(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>){
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
        <main className="main-newRemainder">
            <form className="form-newRemainder" onSubmit={handleSubmit}>
                <div className='duoRow'>
                    <div className='soloRow'>
                        <label htmlFor="amountOfWeeks">Amount of Weeks</label>
                        <input name="amountOfWeeks" value={inputsValues?.amountOfWeeks || ''} onChange={handleChange} id="amountOfWeeks" type="text"/>
                    </div>
                    <div className='soloRow'>
                        <label htmlFor="validatedBy">Validated by</label>
                        <input name="validatedBy" value={inputsValues?.validatedBy || ''} onChange={handleChange} id="validatedBy" type="text"/>
                    </div>
                </div>

                <label htmlFor="notes" className='defaultSpacing'>Notes</label>
                <textarea name="notes" value={inputsValues?.notes || ''} onChange={handleChange} id="notes"/>

                <input id="remainderSubmit" type="submit" value="Assign some"/>

            </form>
        </main>
    </>
    )
}

export default NewRemainder

interface IState{
    amountOfWeeks?: string
    validatedBy?: string
    notes?: string
}