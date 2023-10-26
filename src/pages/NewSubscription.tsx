import Header from '../components/Header'
import '../style/NewSubscription.css'

function NewSubscription(){
    return(
    <>
        <Header/>
        <main className="main-subscription">
            <form className="form-subscription">
                <div className='duoRow'>
                    <div className='soloRow'>
                        <label htmlFor="ribBIC" className='defaultSpacing'>Montant</label>
                        <input id="ribBIC" type="text"/>
                    </div>                
                    <div className='soloRow'>
                        <label htmlFor="ribBank" className='defaultSpacing'>Parrain</label>
                        <input id="ribBank" type="text"/>
                    </div>
                </div>

                <div className='duoRow'>
                    <div className='soloRow'>
                        <label htmlFor="ribOwner" className='defaultSpacing'>Date de Départ</label>
                        <input id="ribOwner" type="text"/>
                    </div>                
                    <div className='soloRow'>
                        <label htmlFor="ribScan" className='defaultSpacing'>Date de Fin</label>
                        <input id="ribScan" type="text"/>
                    </div>
                </div>

                <input id="ribSubmit" type="submit" value="Ajouter ce RIB"/>
            </form>
        </main>
    </>
    )
}

export default NewSubscription