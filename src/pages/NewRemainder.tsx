import Header from '../components/Header'
import '../style/NewRemainder.css'

function NewRemainder(){
    return (
    <>
        <Header/>
        <main className="main-newRemainder">
            <form className="form-newRemainder">
                <div className='duoRow'>
                    <div className='soloRow'>
                        <label htmlFor="remainder-amountOfWeeks">Amount of Weeks</label>
                        <input id="remainder-amountOfWeeks" type="text"/>
                    </div>
                    <div className='soloRow'>
                        <label htmlFor="remainder-validatedBy">Validated by</label>
                        <input id="remainder-validatedBy" type="text"/>
                    </div>
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