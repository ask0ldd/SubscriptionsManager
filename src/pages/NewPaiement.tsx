import '../style/NewPaiement.css'

function NewPaiement(){
    return (
        <main>
            <form className="newPaiement-Form">
                <div style={{display:'flex'}}>
                    <div>
                        <label>Activity</label>
                        <input type='text'/>
                    </div>
                    <div>
                        <label>Subscription Duration</label>
                        <input type='text'/>
                    </div>
                    <div>
                        <label>Starting Date</label>
                        <input type='text'/>
                    </div>

                </div>

            </form>
        </main>
    )
}

export default NewPaiement