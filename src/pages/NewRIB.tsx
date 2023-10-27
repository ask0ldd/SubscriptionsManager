import Header from '../components/Header'
import '../style/NewRIB.css'

function NewRIB(){
    return(
    <>
        <Header/>
        <main className="main-rib">
            <form className="form-rib">

                <div className='duoRow'>
                    <div className='soloRow'>
                            <label htmlFor="ribIBAN">IBAN</label>
                            <input id="ribIBAN" type="text"/>
                    </div>
                    <div className='soloRow'>
                    </div>
                </div>

                <div className='duoRow'>
                    <div className='soloRow'>
                        <label htmlFor="ribBIC" className='defaultSpacing'>Bank Identification Code</label>
                        <input id="ribBIC" type="text"/>
                    </div>                
                    <div className='soloRow'>
                        <label htmlFor="ribBank" className='defaultSpacing'>Domiciliation</label>
                        <input id="ribBank" type="text"/>
                    </div>
                </div>

                <div className='duoRow'>
                    <div className='soloRow'>
                        <label htmlFor="ribOwner" className='defaultSpacing'>Nom du Titulaire</label>
                        <input id="ribOwner" type="text"/>
                    </div>                
                    <div className='soloRow'>
                        <label htmlFor="ribScan" className='defaultSpacing'>Scan</label>
                        <input id="ribScan" type="text"/>
                    </div>
                </div>

                <input id="ribSubmit" type="submit" value="Ajouter ce RIB"/>
            </form>
        </main>
    </>
    )
}

export default NewRIB