import '../style/NewLeftover.css'

function NewLeftover(){
    return (
        <main>
            <form className="newLeftover-Form">
                <div style={{width:'40%', flex:'1 1 46%'}}>
                    <label htmlFor="leftover-amountOfWeeks">Amount of Weeks</label>
                    <input id="leftover-amountOfWeeks" type="text"/>
                </div>
                <div style={{width:'40%', flex:'1 1 46%'}}>
                    <label htmlFor="leftover-validatedBy">Validated by</label>
                    <input id="leftover-validatedBy" type="text"/>
                </div>

                <label htmlFor="subscriptionNotes" className='defaultSpacing'>Notes</label>
                <textarea id="subscriptionNotes"/>

                <input id="newPaymentSubmit" type="submit" value="Submit a New Payment"/>

            </form>
        </main>
    )
}

export default NewLeftover