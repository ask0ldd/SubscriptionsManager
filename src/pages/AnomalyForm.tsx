/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import Header from '../components/Header'
import '../style/AnomalyForm.css'
import { useFormManager } from '../hooks/useFormManager'
import { Validators } from '../services/validator'

function AnomalyForm(){

    const fieldnames = [
        'title', 
        'activeFrom', 
        'activeUntil', 
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
            {fieldName : 'title', validators : [Validators.isName]},
            {fieldName : 'activeFrom', validators : [Validators.isDate]},
            {fieldName : 'activeUntil', validators : [Validators.isDate]},
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

    function clearInputPlaceHolder(event: React.FormEvent<HTMLInputElement>){
        if(event.currentTarget.placeholder=="xx/xx/xxxx") event.currentTarget.placeholder=""
    }

    return(
    <>
        <Header/>
        <main className="main-anomaly">
            <form className='form-anomaly' onSubmit={handleSubmit}>

                <div className='soloRow'>
                    <div className='labelErrorContainer'><label htmlFor='title'>Title</label>{inputsStates?.title?.error && <span>Error Message</span>}</div>
                    <input name="title" value={inputsStates?.title?.value || ''} onChange={handleChange} id="title" type="text"/>
                </div>

                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="activeFrom">Active From</label>{inputsStates?.activeFrom?.error && <span>Error Message</span>}</div>
                        <input name="activeFrom" value={inputsStates?.activeFrom?.value || ''} onChange={handleChange} onClick={clearInputPlaceHolder} id="activeFrom" type="text" placeholder="xx/xx/xxxx"/>
                    </div>                
                    <div className='soloRow'>
                        <div className='labelErrorContainer'><label htmlFor="activeUntil">To</label>{inputsStates?.activeUntil?.error && <span>Error Message</span>}</div>
                        <input name="activeUntil" value={inputsStates?.activeUntil?.value || ''} onChange={handleChange} onClick={clearInputPlaceHolder} id="activeUntil" type="text" placeholder="xx/xx/xxxx"/>
                    </div>
                </div>

                <div className='labelErrorContainer'><label htmlFor="notes" className='defaultSpacing'>Notes</label>{inputsStates?.notes?.error && <span>Error Message</span>}</div>
                <textarea name="notes" value={inputsStates?.notes?.value || ''} onChange={handleChange} id="notes"/>

                <input id="anomalySubmit" type="submit" value="Set Anomaly"/>
            </form>
        </main>
    </>
    )
}

export default AnomalyForm