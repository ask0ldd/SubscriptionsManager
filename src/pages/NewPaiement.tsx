import '../style/NewPaiement.css'

function NewPaiement(){
    return (
        <main>
            <form className="newPaiement-Form">
                <div className='trioletContainer'>
                    <div className='triolet'>
                        <label>Activity</label>
                        <input type='text'/>
                    </div>
                    <div className='triolet'>
                        <label>Starting Date</label>
                        <input type='text'/>
                    </div>
                    <div className='triolet'>
                        <label>Subscription Duration</label>
                        <input type='text'/>
                    </div>
                </div>

                <div className='trioletContainer'>
                    <div className='triolet'>
                        <label className='defaultSpacing'>Registration Fees</label>
                        <input type='text'/>
                    </div>
                    <div className='triolet'>
                        <label className='defaultSpacing'>Payment Method</label>
                        <input type='text'/>
                    </div>
                    <div className='triolet'>
                        <label className='defaultSpacing'>Payment Date</label>
                        <input type='text'/>
                    </div>
                </div>

            </form>
        </main>
    )
}

export default NewPaiement