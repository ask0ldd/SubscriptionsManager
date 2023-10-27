import Header from '../components/Header'
import '../style/NewAnomaly.css'

function NewAnomaly(){
    return(
    <>
        <Header/>
        <main className="main-anomaly">
            <form className='form-anomaly'>

                <div className='soloRow'>
                    <label htmlFor='anomalyTitle'>Title</label>
                    <input id="anomalyTitle" type="text"/>
                </div>

                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <label htmlFor="anomalyActiveDate">Active From</label>
                        <input id="anomalyActiveDate" type="text" placeholder="xx/xx/xxxx"/>
                    </div>                
                    <div className='soloRow'>
                        <label htmlFor="anomalyEndOfActivity">To</label>
                        <input id="anomalyEndOfActivity" type="text" placeholder="xx/xx/xxxx"/>
                    </div>
                </div>

                <label htmlFor="anomalyDetails" className='defaultSpacing'>Notes</label>
                <textarea id="anomalyDetails"/>

                <input id="anomalySubmit" type="submit" value="Set Anomaly"/>
            </form>
        </main>
    </>
    )
}

export default NewAnomaly