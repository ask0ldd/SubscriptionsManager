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
                        <label htmlFor="ribBIC">Montant</label>
                        <input id="ribBIC" type="text"/>
                    </div>                
                    <div className='soloRow'>
                        <label htmlFor="ribBank">Parrain</label>
                        <input id="ribBank" type="text"/>
                    </div>
                </div>

                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <label htmlFor="ribOwner">Date de Départ</label>
                        <input id="ribOwner" type="text"/>
                    </div>                
                    <div className='soloRow'>
                        <label htmlFor="ribScan">Date de Fin</label>
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