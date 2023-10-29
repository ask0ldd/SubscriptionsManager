// import { useState } from 'react'
import Header from '../components/Header'
import '../style/NewRIB.css'
import { IInputs, useFormManager } from '../hooks/useFormManager'
import { Validators } from '../services/validator'
import { useEffect } from 'react'

function NewRIB(){

    // const [inputsValues, setInputsValues] = useState<IState>({})

    const {inputsStates, setinputsStates, setValidator, updateVirtualFormField} = useFormManager(fieldnames, nonMandatoryFields)

    useEffect(() => {
        setValidator('IBAN', Validators.isNumber)
        setValidator('BIC', Validators.isNumber)
        setValidator('bank', Validators.isName)
        setValidator('owner', Validators.isName)
        setValidator('scan', Validators.isName)
    }, [])

    function handleChange(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.currentTarget
        updateVirtualFormField(name, value)
        // realtimeInputValidation(name, value)
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        console.log('state : ', inputsStates)
    }
    
    return(
    <>
        <Header/>
        <main className="main-rib">
            <form className="form-rib" onSubmit={handleSubmit}>

                <div className='duoRow'>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="IBAN">IBAN</label>{inputsStates?.IBAN?.error && <span>Error Message</span>}</div>
                        <input name="IBAN" value={inputsStates?.IBAN?.value || ''} onChange={handleChange} id="IBAN" type="text"/>
                    </div>
                    <div className='soloRow'>
                    </div>
                </div>

                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="BIC">Bank Identification Code</label>{inputsStates?.BIC?.error && <span>Error Message</span>}</div>
                        <input name="BIC" value={inputsStates?.BIC?.value || ''} onChange={handleChange} id="BIC" type="text"/>
                    </div>                
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="bank">Domiciliation</label>{inputsStates?.bank?.error && <span>Error Message</span>}</div>
                        <input name="bank" value={inputsStates?.bank?.value || ''} onChange={handleChange} id="bank" type="text"/>
                    </div>
                </div>

                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="owner">Nom du Titulaire</label>{inputsStates?.owner?.error && <span>Error Message</span>}</div>
                        <input name="owner" value={inputsStates?.owner?.value || ''} onChange={handleChange} id="owner" type="text"/>
                    </div>                
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="scan">Scan Upload</label>{inputsStates?.scan?.error && <span>Error Message</span>}</div>
                        <input name="scan" value={inputsStates?.scan?.value || ''} onChange={handleChange} id="scan" type="text"/>
                    </div>
                </div>

                <input id="ribSubmit" type="submit" value="Ajouter ce RIB"/>
            </form>
        </main>
    </>
    )
}

export default NewRIB

/*interface IState{
    IBAN?: string
    BIC?: string
    bank?: string
    owner?: string
    scan?: string
}*/

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