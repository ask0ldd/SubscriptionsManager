/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import Header from '../components/Header'
import '../style/RemainderForm.css'
import { useFormManager } from '../hooks/useFormManager'
import { Validators } from '../services/validator'

function RemainderForm(){

    const fieldnames = [
        'amountOfWeeks', 
        'authorizedBy', 
        'notes', 
    ]
    
    const nonMandatoryFields = [
        'notes',
    ]

    const {inputsStates, setValidators, updateVirtualFormField, fullFormValidation, resetValidators} = useFormManager(fieldnames, nonMandatoryFields)

    useEffect(() => {
        // help with double useeffect triggering in dev mode
        resetValidators()

        setValidators([
            {fieldName : 'amountOfWeeks', validators : [Validators.isPositiveNumber]},
            {fieldName : 'authorizedBy', validators : [Validators.isName]},
            {fieldName : 'notes', validators : []},
        ])
    }, [])

    function handleChange(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.currentTarget
        updateVirtualFormField(name, value)
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        fullFormValidation()
        console.log('state : ', inputsStates)
    }
    
    return (
    <>
        <Header/>
        <main className="main-newRemainder">
            <form className="form-newRemainder" onSubmit={handleSubmit}>
                <div className='duoRow'>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="amountOfWeeks">Amount of Weeks</label>{inputsStates?.amountOfWeeks?.error && <span>Error Message</span>}</div>
                        <input name="amountOfWeeks" value={inputsStates?.amountOfWeeks.value || ''} onChange={handleChange} id="amountOfWeeks" type="text"/>
                    </div>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="authorizedBy">Validated by</label>{inputsStates?.authorizedBy?.error && <span>Error Message</span>}</div>
                        <input name="authorizedBy" value={inputsStates?.authorizedBy.value || ''} onChange={handleChange} id="authorizedBy" type="text"/>
                    </div>
                </div>

                <div className='labelErrorContainer'><label htmlFor="notes" className='defaultSpacing'>Notes</label>{inputsStates?.notes?.error && <span>Error Message</span>}</div>
                <textarea name="notes" value={inputsStates?.notes.value || ''} onChange={handleChange} id="notes"/>

                <input id="remainderSubmit" type="submit" value="Assign some"/>

            </form>
        </main>
    </>
    )
}

export default RemainderForm