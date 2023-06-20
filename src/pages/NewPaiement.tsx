import '../style/NewPaiement.css'

function NewPaiement(){
    return (
        <main>
            <form className="newPaiement-Form">
                <div className='trioletContainer'>
                    <div className='triolet'>
                        <label htmlFor="subscribedActivity">Activity</label>
                        <input id="subscribedActivity" type='text'/>
                    </div>
                    <div className='triolet'>
                        <label htmlFor="subscription-startingDate">Subscription Starting On</label>
                        <input id="subscription-startingDate" type='text'/>
                    </div>
                    <div className='triolet'>
                        <label htmlFor="subscriptionDuration">Subscription Duration</label>
                        <input id="subscriptionDuration" type='text'/>
                    </div>
                </div>

                <div className='trioletContainer defaultSpacing'>
                    <div className='triolet'>
                        <label htmlFor="registrationFees">Registration Fees</label>
                        <input id="registrationFees" type='text'/>
                    </div>
                    <div className='triolet'>
                        <label htmlFor="paymentMethod">Payment Method</label>
                        <input id="paymentMethod" type='text'/>
                    </div>
                    <div className='triolet'>
                        <label htmlFor="paymentDate">Payment Date</label>
                        <input id="paymentDate" type='text'/>
                    </div>
                </div>

                <label htmlFor="subscriptionNotes" className='defaultSpacing'>Notes</label>
                <textarea id="subscriptionNotes"/>

                <input id="newPaymentSubmit" type="submit" value="Submit a New Payment"/>

            </form>
        </main>
    )
}

export default NewPaiement