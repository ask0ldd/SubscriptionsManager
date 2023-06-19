import '../style/NewMember.css'

function NewMember(){
    return (
        <main>
            <form className="newMember-Form">
                <div style={{width:'40%', flex:'1 1 40%'}}>
                    <label htmlFor="lastname">Lastname</label>
                    <input id="lastname" type="text"/>
                    <label className='defaultSpacing' htmlFor="birthdate">Birthdate</label>
                    <input id="birthdate" type="text"/>
                </div>
                <div style={{width:'40%', flex:'1 1 40%'}}>
                    <label htmlFor="firstname">Firstname</label>
                    <input id="firstname" type="text"/>
                    <label className='defaultSpacing' htmlFor="gender">Gender</label>
                    <input id="gender" type="text"/>
                </div>
                <div style={{width:'100%'}}>
                    <label className='defaultSpacing' htmlFor="address1">Address [1]</label>
                    <input id="address1" type="text"/>
                    <label className='defaultSpacing' htmlFor="address1">Address [2]</label>
                    <input id="address1" type="text"/>
                </div>
                <div style={{width:'40%', flex:'1 1 40%'}}>
                    <label className='defaultSpacing' htmlFor="postalcode">Postal Code</label>
                    <input id="postalcode" type="text"/>
                </div>
                <div style={{width:'40%', flex:'1 1 40%'}}>
                    <label className='defaultSpacing' htmlFor="city">City</label>
                    <input id="city" type="text"/>
                </div>

                <div style={{width:'40%', flex:'1 1 40%'}}>
                    <label className='defaultSpacing' htmlFor="phone">Phone</label>
                    <input id="phone" type="text"/>
                    <label className='defaultSpacing' htmlFor="email">Email</label>
                    <input id="email" type="text"/>
                </div>
                <div style={{width:'40%', flex:'1 1 40%'}}>
                    <label className='defaultSpacing' htmlFor="mobile">Mobile</label>
                    <input id="mobile" type="text"/>
                </div>

                <div style={{width:'40%', flex:'1 1 40%'}}>
                    <label className='defaultSpacing' htmlFor="emergencyContact-lastname">Lastname</label>
                    <input id="emergencyContact-lastname" type="text"/>
                    <label className='defaultSpacing' htmlFor="emergencyContact-mobile">Mobile</label>
                    <input id="emergencyContact-mobile" type="text"/>
                </div>
                <div style={{width:'40%', flex:'1 1 40%'}}>
                    <label htmlFor="emergencyContact-firstname">Firstname</label>
                    <input id="emergencyContact-firstname" type="text"/>
                </div>
                
                <div style={{width:'100%'}}>
                <input id="newMemberSubmit" type="submit" value="Register this new Member"/>
                </div>
            </form>
        </main>
    )
}

export default NewMember