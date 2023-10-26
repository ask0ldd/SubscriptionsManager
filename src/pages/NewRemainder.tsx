import Header from '../components/Header'
import '../style/NewRemainder.css'

function NewRemainder(){
    return (
    <>
        <Header/>
        <main>
            <form className="newRemainder-Form">
                <div style={{width:'40%', flex:'1 1 46%'}}>
                    <label htmlFor="remainder-amountOfWeeks">Amount of Weeks</label>
                    <input id="remainder-amountOfWeeks" type="text"/>
                </div>
                <div style={{width:'40%', flex:'1 1 46%'}}>
                    <label htmlFor="remainder-validatedBy">Validated by</label>
                    <input id="remainder-validatedBy" type="text"/>
                </div>

                <label htmlFor="subscriptionNotes" className='defaultSpacing'>Notes</label>
                <textarea id="subscriptionNotes"/>

                <input id="remainderSubmit" type="submit" value="Assign some"/>

            </form>
        </main>
    </>
    )
}

export default NewRemainder