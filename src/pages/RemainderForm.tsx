/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import Header from '../components/Header'
import '../style/RemainderForm.css'
import { useFormManager } from '../hooks/useFormManager2'
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

    const virtualForm = useFormManager(fieldnames, nonMandatoryFields)

    useEffect(() => {
        // help with double useeffect triggering in dev mode
        virtualForm.resetValidators()

        virtualForm.setValidators([
            {fieldName : 'amountOfWeeks', validators : [Validators.isPositiveNumber]},
            {fieldName : 'authorizedBy', validators : [Validators.isName]},
            {fieldName : 'notes', validators : []},
        ])
    }, [])

    function handleChange(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.currentTarget
        virtualForm.updateVirtualFormField(name, value)
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        virtualForm.fullFormValidation()
        // console.log('state : ', inputsStates)
    }
    
    return (
    <>
        <Header/>
        <main className="main-newRemainder">
            <form className="form-newRemainder" onSubmit={handleSubmit}>
                <div className='duoRow'>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="amountOfWeeks">Amount of Weeks</label>{virtualForm.state.amountOfWeeks.error && <span>Error Message</span>}</div>
                        <input name="amountOfWeeks" value={virtualForm.state.amountOfWeeks.value || ''} onChange={handleChange} id="amountOfWeeks" type="text"/>
                    </div>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="authorizedBy">Validated by</label>{virtualForm.state.authorizedBy.error && <span>Error Message</span>}</div>
                        <input name="authorizedBy" value={virtualForm.state.authorizedBy.value || ''} onChange={handleChange} id="authorizedBy" type="text"/>
                    </div>
                </div>

                <div className='labelErrorContainer'><label htmlFor="notes" className='defaultSpacing'>Notes</label>{virtualForm.state.notes.error && <span>Error Message</span>}</div>
                <textarea name="notes" value={virtualForm.state.notes.value || ''} onChange={handleChange} id="notes"/>

                <input id="remainderSubmit" type="submit" value="Assign some"/>

            </form>
        </main>
    </>
    )
}

export default RemainderForm