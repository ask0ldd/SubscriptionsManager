import { useEffect, useState } from 'react'
import Header from '../components/Header'
import '../style/NewRefund.css'
import { Validators } from '../services/validator'
import { useFormManager } from '../hooks/useFormManager'

function NewRefund(){

    const fieldnames = [
        'amount', 
        'paymentMethod', 
        'authorizedBy', 
        'uploadedDoc', 
        'notes', 
    ]
    
    const nonMandatoryFields = [
        'notes', 'uploadedDoc'
    ]

    const {inputsStates, setValidators, updateVirtualFormField, fullFormValidation, resetValidators} = useFormManager(fieldnames, nonMandatoryFields)

    useEffect(() => {
        // help with double useeffect triggering in dev mode
        resetValidators()

        setValidators([
            {fieldName : 'amount', validators : [Validators.isPositiveNumber]},
            {fieldName : 'paymentMethod', validators : [Validators.isName]},
            {fieldName : 'authorizedBy', validators : [Validators.isName]},
            {fieldName : 'uploadedDoc', validators : [Validators.isName]},
            {fieldName : 'notes', validators : [Validators.isName]},
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
        <main className="main-refund">
            <form className="form-refund" onSubmit={handleSubmit}>
                <div className='duoRow'>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="amount">Montant du Remboursement</label>{inputsStates?.amount?.error && <span>Error Message</span>}</div>
                        <input name="amount" value={inputsStates?.amount?.value || ''} onChange={handleChange} id="amount" type="text"/>
                    </div>                
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="paymentMethod">Moyen de Paiement</label>{inputsStates?.paymentMethod?.error && <span>Error Message</span>}</div>
                        <input name="paymentMethod" value={inputsStates?.paymentMethod?.value || ''} onChange={handleChange} id="paymentMethod" type="text"/>
                    </div>
                </div>
                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="authorizedBy">Autorisé par</label>{inputsStates?.authorizedBy?.error && <span>Error Message</span>}</div>
                        <input name="authorizedBy" value={inputsStates?.authorizedBy?.value || ''} onChange={handleChange} id="authorizedBy" type="text"/>
                    </div>                
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="uploadedDoc">Ajout d'un Document (RIB / Chèque)</label>{inputsStates?.uploadedDoc?.error && <span>Error Message</span>}</div>
                        <input name="uploadedDoc" value={inputsStates?.uploadedDoc?.value || ''} onChange={handleChange} id="uploadedDoc" type="text"/>
                    </div>
                </div>
                <div className='labelErrorContainer'><label htmlFor="notes" className='defaultSpacing'>Notes</label>{inputsStates?.notes?.error && <span>Error Message</span>}</div>
                <textarea name="notes" value={inputsStates?.notes?.value || ''} onChange={handleChange} id="notes"/>

                <input id="refundSubmit" type="submit" value="Valider le Remboursement"/>
            </form>
        </main>
    </>
    )
}

export default NewRefund

interface IState{
    amount?: string
    paymentMethod?: string
    authorizedBy?: string
    uploadedDoc?: string
    notes?: string
}