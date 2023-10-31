/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import Header from '../components/Header'
import { useFormManager } from '../hooks/useFormManager'
import '../style/RIBForm.css'
import { Validators } from '../services/validator'

function RIBForm(){

    const fieldnames = [
        'fees', 
        'sponsor', 
        'startingDate', 
        'endDate', 
    ]
    
    const nonMandatoryFields = [
        'sponsor',
    ]

    const {inputsStates, setValidators, updateVirtualFormField, fullFormValidation, resetValidators} = useFormManager(fieldnames, nonMandatoryFields)

    useEffect(() => {
        // help with double useeffect triggering in dev mode
        resetValidators()

        setValidators([
            {fieldName : 'fees', validators : [Validators.isPositiveNumber]},
            {fieldName : 'sponsor', validators : [Validators.isName]},
            {fieldName : 'startingDate', validators : [Validators.isDate]},
            {fieldName : 'endDate', validators : [Validators.isDate]},
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

    return(
    <>
        <Header/>
        <main className="main-subscription">
            <form className="form-subscription" onSubmit={handleSubmit}>

                <div className='duoRow'>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="fees">Montant</label>{inputsStates?.fees?.error && <span>Error Message</span>}</div>
                        <input value={inputsStates?.fees.value || ''} onChange={handleChange} name="fees" id="fees" type="text"/>
                    </div>                
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="sponsor">Parrain</label>{inputsStates?.sponsor?.error && <span>Error Message</span>}</div>
                        <input value={inputsStates?.sponsor.value || ''} onChange={handleChange} name="sponsor" id="sponsor" type="text"/>
                    </div>
                </div>

                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="startingDate">Date de Départ</label>{inputsStates?.startingDate?.error && <span>Error Message</span>}</div>
                        <input value={inputsStates?.startingDate.value || ''} onChange={handleChange} name="startingDate" id="startingDate" type="text"/>
                    </div>                
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="endDate">Date de Fin</label>{inputsStates?.endDate?.error && <span>Error Message</span>}</div>
                        <input value={inputsStates?.endDate.value || ''} onChange={handleChange} name="endDate" id="endDate" type="text"/>
                    </div>
                </div>

                <input id="submit" type="submit" value="Nouvelle Souscription"/>
            </form>
        </main>
    </>
    )
}

export default RIBForm