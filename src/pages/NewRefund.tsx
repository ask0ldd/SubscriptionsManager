import Header from '../components/Header'
import '../style/NewRefund.css'

function NewRefund(){
    return(
    <>
        <Header/>
        <main className="main-refund">
            <form className="form-refund">
                <div className='duoRow'>
                    <div className='soloRow'>
                        <label htmlFor="refundAmount">Montant du Remboursement</label>
                        <input id="refundAmount" type="text"/>
                    </div>                
                    <div className='soloRow'>
                        <label htmlFor="refundMethod">Moyen de Paiement</label>
                        <input id="refundMethod" type="text"/>
                    </div>
                </div>
                <div className='duoRow defaultSpacing'>
                    <div className='soloRow'>
                        <label htmlFor="refundAmount">Autorisé par</label>
                        <input id="refundAmount" type="text"/>
                    </div>                
                    <div className='soloRow'>
                        <label htmlFor="refundMethod">Ajout d'un Document (RIB / Chèque)</label>
                        <input id="refundMethod" type="text"/>
                    </div>
                </div>
                <label htmlFor="refundDetails" className='defaultSpacing'>Notes</label>
                <textarea id="refundDetails"/>

                <input id="refundSubmit" type="submit" value="Valider le Remboursement"/>
            </form>
        </main>
    </>
    )
}

export default NewRefund