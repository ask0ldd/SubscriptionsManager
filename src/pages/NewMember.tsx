import '../style/NewMember.css'

function NewMember(){
    return (
        <main>
            <form className="newMember-Form">
                <div style={{width:'40%', flex:'1 1 40%'}}>
                    <label htmlFor="lastname">Lastname</label>
                    <input name="lastname" type="text"/>
                    <label className='defaultSpacing' htmlFor="birthdate">Birthdate</label>
                    <input name="birthdate" type="text"/>
                </div>
                <div style={{width:'40%', flex:'1 1 40%'}}>
                    <label htmlFor="firstname">Firstname</label>
                    <input name="firstname" type="text"/>
                    <label className='defaultSpacing' htmlFor="gender">Gender</label>
                    <input name="gender" type="text"/>
                </div>
                <div style={{width:'100%'}}>
                    <label className='defaultSpacing' htmlFor="address1">Address [1]</label>
                    <input name="address1" type="text"/>
                    <label className='defaultSpacing' htmlFor="address1">Address [2]</label>
                    <input name="address1" type="text"/>
                </div>
                <div style={{width:'40%', flex:'1 1 40%'}}>
                    <label className='defaultSpacing' htmlFor="postalcode">Postal Code</label>
                    <input name="postalcode" type="text"/>
                </div>
                <div style={{width:'40%', flex:'1 1 40%'}}>
                    <label className='defaultSpacing' htmlFor="city">City</label>
                    <input name="city" type="text"/>
                </div>
                
            </form>
        </main>
    )
}

export default NewMember