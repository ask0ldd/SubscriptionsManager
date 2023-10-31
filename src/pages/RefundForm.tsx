/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import Header from '../components/Header'
import '../style/RefundForm.css'
import { Validators } from '../services/validator'
import { useFormManager } from '../hooks/useFormManager2'

function RefundForm(){

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

    const {virtualForm} = useFormManager(fieldnames, nonMandatoryFields)

    useEffect(() => {
        // help with double useeffect triggering in dev mode
        virtualForm.resetValidators()

        virtualForm.setValidators([
            {fieldName : 'amount', validators : [Validators.isPositiveNumber]},
            {fieldName : 'paymentMethod', validators : [Validators.isName]},
            {fieldName : 'authorizedBy', validators : [Validators.isName]},
            {fieldName : 'uploadedDoc', validators : [Validators.isName]},
            {fieldName : 'notes', validators : [Validators.isName]},
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
        
    return(
    <>
        <Header/>
        <main className="main-refund">
            <form className="form-refund" onSubmit={handleSubmit}>
                <div className='duoRow'>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="amount">Montant du Remboursement</label>{virtualForm.state.amount?.error && <span>Error Message</span>}</div>
                        <input name="amount" value={virtualForm.state.amount?.value || ''} onChange={handleChange} id="amount" type="text"/>
                    </div>                
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="paymentMethod">Moyen de Paiement</label>{virtualForm.state.paymentMethod?.error && <span>Error Message</span>}</div>
                        <input name="paymentMethod" value={virtualForm.state.paymentMethod?.value || ''} onChange={handleChange} id="paymentMethod" type="text"/>
                    </div>
                </div>
                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="authorizedBy">Autorisé par</label>{virtualForm.state.authorizedBy?.error && <span>Error Message</span>}</div>
                        <input name="authorizedBy" value={virtualForm.state.authorizedBy?.value || ''} onChange={handleChange} id="authorizedBy" type="text"/>
                    </div>                
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="uploadedDoc">Ajout d'un Document (RIB / Chèque)</label>{virtualForm.state.uploadedDoc?.error && <span>Error Message</span>}</div>
                        <input name="uploadedDoc" value={virtualForm.state.uploadedDoc?.value || ''} onChange={handleChange} id="uploadedDoc" type="text"/>
                    </div>
                </div>
                <div className='labelErrorContainer'><label htmlFor="notes" className='defaultSpacing'>Notes</label>{virtualForm.state.notes?.error && <span>Error Message</span>}</div>
                <textarea name="notes" value={virtualForm.state.notes?.value || ''} onChange={handleChange} id="notes"/>

                <input id="refundSubmit" type="submit" value="Valider le Remboursement"/>
            </form>
        </main>
    </>
    )
}

export default RefundForm