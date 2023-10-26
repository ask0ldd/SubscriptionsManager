import '../style/NewRIB.css'

function NewRIB(){
    return(
        <main className="main-rib">
            <form className="form-rib">
                <div className='soloRow'>
                        <label htmlFor="refundAmount" className='defaultSpacing'>IBAN</label>
                        <input id="refundAmount" type="text"/>
                </div>
                <div className='duoRow'>
                    <div className='soloRow'>
                        <label htmlFor="refundAmount" className='defaultSpacing'>Bank Identification Code</label>
                        <input id="refundAmount" type="text"/>
                    </div>                
                    <div className='soloRow'>
                        <label htmlFor="refundMethod" className='defaultSpacing'>Domiciliation</label>
                        <input id="refundMethod" type="text"/>
                    </div>
                </div>

                <div className='duoRow'>
                    <div className='soloRow'>
                        <label htmlFor="refundAmount" className='defaultSpacing'>Nom du Titulaire</label>
                        <input id="refundAmount" type="text"/>
                    </div>                
                    <div className='soloRow'>
                        <label htmlFor="refundMethod" className='defaultSpacing'>Scan</label>
                        <input id="refundMethod" type="text"/>
                    </div>
                </div>

                <input id="refundSubmit" type="submit" value="Valider le Remboursement"/>
            </form>
        </main>
    )
}

export default NewRIB