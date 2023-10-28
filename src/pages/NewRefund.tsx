import { useState } from 'react'
import Header from '../components/Header'
import '../style/NewRefund.css'

function NewRefund(){

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
    
    return(
    <>
        <Header/>
        <main className="main-refund">
            <form className="form-refund" onSubmit={handleSubmit}>
                <div className='duoRow'>
                    <div className='soloRow'>
                        <label htmlFor="amount">Montant du Remboursement</label>
                        <input name="amount" value={inputsValues?.amount || ''} onChange={handleChange} id="amount" type="text"/>
                    </div>                
                    <div className='soloRow'>
                        <label htmlFor="paymentMethod">Moyen de Paiement</label>
                        <input name="paymentMethod" value={inputsValues?.paymentMethod || ''} onChange={handleChange} id="paymentMethod" type="text"/>
                    </div>
                </div>
                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <label htmlFor="authorizedBy">Autorisé par</label>
                        <input name="authorizedBy" value={inputsValues?.authorizedBy || ''} onChange={handleChange} id="authorizedBy" type="text"/>
                    </div>                
                    <div className='soloRow'>
                        <label htmlFor="uploadedDoc">Ajout d'un Document (RIB / Chèque)</label>
                        <input name="uploadedDoc" value={inputsValues?.uploadedDoc || ''} onChange={handleChange} id="uploadedDoc" type="text"/>
                    </div>
                </div>
                <label htmlFor="notes" className='defaultSpacing'>Notes</label>
                <textarea name="notes" value={inputsValues?.notes || ''} onChange={handleChange} id="notes"/>

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