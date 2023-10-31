/* eslint-disable react-hooks/exhaustive-deps */
import Header from '../components/Header'
import '../style/RIBForm.css'
import { useFormManager } from '../hooks/useFormManager2'
import { Validators } from '../services/validator'
import { useEffect } from 'react'

function RIBForm(){

    const fieldnames = [
        'IBAN', 
        'BIC', 
        'bank', 
        'owner', 
        'scan', 
    ]
    
    const nonMandatoryFields = [
        'scan', 
    ]

    const {inputsStates, virtualForm} = useFormManager(fieldnames, nonMandatoryFields)

    useEffect(() => {
        // help with double useeffect triggering in dev mode
        virtualForm.resetValidators()

        virtualForm.setValidators([
            {fieldName : 'IBAN', validators : [Validators.isNumber, Validators.isBetween_0_and_99]},
            {fieldName : 'BIC', validators : [Validators.isNumber]},
            {fieldName : 'bank', validators : [Validators.isName]},
            {fieldName : 'owner', validators : [Validators.isName]},
            {fieldName : 'scan', validators : [Validators.isNumber]},
        ])
    }, [])

    function handleChange(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.currentTarget
        virtualForm.updateVirtualFormField(name, value)
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        virtualForm.fullFormValidation()
        console.log('state : ', inputsStates)
    }
    
    return(
    <>
        <Header/>
        <main className="main-rib">
            <form className="form-rib" onSubmit={handleSubmit}>

                <div className='duoRow'>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="IBAN">IBAN</label>{virtualForm.state.IBAN?.error && <span>Error Message</span>}</div>
                        <input name="IBAN" value={virtualForm.state.IBAN?.value || ''} onChange={handleChange} id="IBAN" type="text"/>
                    </div>
                    <div className='soloRow'>
                    </div>
                </div>

                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="BIC">Bank Identification Code</label>{virtualForm.state.BIC?.error && <span>Error Message</span>}</div>
                        <input name="BIC" value={virtualForm.state.BIC?.value || ''} onChange={handleChange} id="BIC" type="text"/>
                    </div>                
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="bank">Domiciliation</label>{virtualForm.state.bank?.error && <span>Error Message</span>}</div>
                        <input name="bank" value={virtualForm.state.bank?.value || ''} onChange={handleChange} id="bank" type="text"/>
                    </div>
                </div>

                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="owner">Nom du Titulaire</label>{virtualForm.state.owner?.error && <span>Error Message</span>}</div>
                        <input name="owner" value={virtualForm.state.owner?.value || ''} onChange={handleChange} id="owner" type="text"/>
                    </div>                
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="scan">Scan Upload</label>{virtualForm.state.scan?.error && <span>Error Message</span>}</div>
                        <input name="scan" value={virtualForm.state.scan?.value || ''} onChange={handleChange} id="scan" type="text"/>
                    </div>
                </div>

                <input id="ribSubmit" type="submit" value="Ajouter ce RIB"/>
            </form>
        </main>
    </>
    )
}

export default RIBForm