import { useState } from 'react'
import Header from '../components/Header'
import '../style/NewAnomaly.css'

function NewAnomaly(){

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

    function clearInputPlaceHolder(event: React.FormEvent<HTMLInputElement>){
        if(event.currentTarget.placeholder=="xx/xx/xxxx") event.currentTarget.placeholder=""
    }

    return(
    <>
        <Header/>
        <main className="main-anomaly">
            <form className='form-anomaly' onSubmit={handleSubmit}>

                <div className='soloRow'>
                    <label htmlFor='title'>Title</label>
                    <input name="title" value={inputsValues?.title || ''} onChange={handleChange} id="title" type="text"/>
                </div>

                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <label htmlFor="activeFrom">Active From</label>
                        <input name="activeFrom" value={inputsValues?.activeFrom || ''} onChange={handleChange} onClick={clearInputPlaceHolder} id="activeFrom" type="text" placeholder="xx/xx/xxxx"/>
                    </div>                
                    <div className='soloRow'>
                        <label htmlFor="activeUntil">To</label>
                        <input name="activeUntil" value={inputsValues?.activeUntil || ''} onChange={handleChange} onClick={clearInputPlaceHolder} id="activeUntil" type="text" placeholder="xx/xx/xxxx"/>
                    </div>
                </div>

                <label htmlFor="notes" className='defaultSpacing'>Notes</label>
                <textarea name="notes" value={inputsValues?.notes || ''} onChange={handleChange} id="notes"/>

                <input id="anomalySubmit" type="submit" value="Set Anomaly"/>
            </form>
        </main>
    </>
    )
}

export default NewAnomaly

interface IState{
    title?: string
    activeFrom?: string
    activeUntil?: string
    notes?: string

}