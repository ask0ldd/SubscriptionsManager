import { useState } from 'react'
import Header from '../components/Header'
import '../style/NewRIB.css'

function NewRIB(){

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
        <main className="main-rib">
            <form className="form-rib" onSubmit={handleSubmit}>

                <div className='duoRow'>
                    <div className='soloRow'>
                        <label htmlFor="IBAN">IBAN</label>
                        <input name="IBAN" value={inputsValues?.IBAN || ''} onChange={handleChange} id="IBAN" type="text"/>
                    </div>
                    <div className='soloRow'>
                    </div>
                </div>

                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <label htmlFor="BIC">Bank Identification Code</label>
                        <input name="BIC" value={inputsValues?.BIC || ''} onChange={handleChange} id="BIC" type="text"/>
                    </div>                
                    <div className='soloRow'>
                        <label htmlFor="bank">Domiciliation</label>
                        <input name="bank" value={inputsValues?.bank || ''} onChange={handleChange} id="bank" type="text"/>
                    </div>
                </div>

                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <label htmlFor="owner">Nom du Titulaire</label>
                        <input name="owner" value={inputsValues?.owner || ''} onChange={handleChange} id="owner" type="text"/>
                    </div>                
                    <div className='soloRow'>
                        <label htmlFor="scan">Scan Upload</label>
                        <input name="scan" value={inputsValues?.scan || ''} onChange={handleChange} id="scan" type="text"/>
                    </div>
                </div>

                <input id="ribSubmit" type="submit" value="Ajouter ce RIB"/>
            </form>
        </main>
    </>
    )
}

export default NewRIB

interface IState{
    IBAN?: string
    BIC?: string
    bank?: string
    owner?: string
    scan?: string
}